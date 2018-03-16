const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .get('/', (req, res) => res.status(404).send())
  .post('/', (req, res) => res.send(req))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
