const express = require('express')
const logger = require('morgan')
const port = 8080

server = express()
server.use(logger('dev'))
server.use(express.static('static'))
server.listen(port)
