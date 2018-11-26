const express = require('express')
const bodyParser =require('body-parser')
const logger = require('morgan')
const port = 8080

server = express()
server.use(logger('dev'))
server.use(bodyParser.urlencoded({extended: true}))

//TODO: remove this
// server.engine('html', require('ejs').renderFile);
server.set('view engine', 'ejs');

server.get('/webform.html', (req, res) => {
  res.render('webform')
})

server.post('/webform.html', (req, res) => {
  const template_vars = {
    firstname: req.body['firstname'],
    phone: req.body['phone'],
    email: req.body['email'],
    environment: req.body['environment'],
    foodStory: req.body['foodStory']
  }
  console.log(template_vars)
  res.render('webform', template_vars)
})

server.use(express.static('static'))
server.listen(port)

// TODO: add functions validating fields here
// call them in server.post
