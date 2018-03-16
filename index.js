const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')
const moment = require('moment-timezone')

express()
    .use(bodyParser.json()) // for parsing application/json
    .use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
    .get('/', (req, res) => res.send())
    .post('', bodyParser.json(), (req, res) => {

        console.log(moment().tz('Asia/Taipei').format() + ' : ' + JSON.stringify(req.body))

        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        const msg = {
            to: 'frenchfriessuper@gmail.com',
            from: 'frenchfriessuper@gmail.com',
            subject: 'Logger',
            text: moment().tz('Asia/Taipei').format() + ' : ' + JSON.stringify(req.body),
        };
        sgMail.send(msg);


        return res.send('okay')
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))