const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')


var helper = require('sendgrid').mail;


var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);



express()
    .use(bodyParser.json()) // for parsing application/json
    .use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    .get('/', (req, res) => res.status(404).send())
    .post('', bodyParser.json(), (req, res) => {

        console.log(JSON.stringify(req.body))

        var from_email = new helper.Email('frenchfriessuper@gmail.com');
        var to_email = new helper.Email('frenchfriessuper@gmail.com');
        var subject = 'Logger';
        var content = new helper.Content('text/plain', JSON.stringify(req.body))
        var mail = new helper.Mail(from_email, subject, to_email, content);

        var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON(),
        });

        sg.API(request, function(error, response) {
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
        });


        return res.send('okay')
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))