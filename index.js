const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser')

express()
  .use(bodyParser.json()) // for parsing application/json
  .use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  .get('/', (req, res) => res.status(404).send())
  .post('', bodyParser.json(), (req, res)=> {
    //if (!req.body) return res.sendStatus(400)
    

    console.log(req.body)
    console.log(req.is('application/json'))
    console.log("receive POST")

    //TODO validate the input, we should verify every input to make sure nothing goes wrong when the client or the scrawler got hacked
    
    console.log(JSON.stringify(req.body))
    
    ret = res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('okay')
    return ret
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
