const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')

express()
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  .get('/', (req, res) => res.status(404).send())
  .post('', bodyParser.json(), (req, res)=> {
        
    console.log(JSON.stringify(req.body))
    
    return res.send('okay')
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
