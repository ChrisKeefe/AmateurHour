const express = require('express')
const bodyParser =require('body-parser')
const logger = require('morgan')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./formSubmissions.db3');
const port = 8080

setUpServer()

server.get('/webform.html', (req, res) => {
  res.render('webform')
})

server.post('/webform.html', handleFormSubmission)

function setUpServer(){
  server = express()
  server.use(logger('dev'))
  server.use(bodyParser.urlencoded({extended: true}))
  server.set('view engine', 'ejs');
}

function handleFormSubmission(req, res){
  const template_vars = {
    firstname: req.body['firstname'],
    phone: req.body['phone'],
    email: req.body['email'],
    environment: req.body['environment'],
    foodStory: req.body['foodStory'],
  }
  res.render('webform', template_vars)
}

server.use(express.static('static'))
server.listen(port)
