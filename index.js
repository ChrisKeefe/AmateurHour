const express = require('express')
const bodyParser =require('body-parser')
const logger = require('morgan')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/formSubmissions.db3');
const port = 8080

setUpServer()

function setUpServer(){
  server = express()
  server.use(logger('dev'))
  server.use(bodyParser.urlencoded({extended: true}))
  server.set('view engine', 'ejs');

  server.get('/webform.html', (req, res) => {
    res.render('webform')
  })

  server.get('/formSubmissions.html', (req, res) => {
    db.all('SELECT * FROM userInfo', (err, rows) => {
      console.log({rows: rows})
      res.render('formSubmissions', {rows: rows})
    })
  })

  server.post('/webform.html', handleFormSubmission)
}

function handleFormSubmission(req, res){
  const template_vars = {
    firstname: req.body['firstname'],
    phone: req.body['phone'],
    email: req.body['email'],
    environment: req.body['environment'],
    foodStory: req.body['foodStory'],
  }
  saveData(template_vars)
  res.redirect('formSubmissions.html')
}

function saveData (formData) {
  console.log(formData)
  const query = `INSERT INTO userInfo (firstname, phone, email, environment, foodStory) ` +
        `VALUES ( ?, ?, ?, ?, ? )`
  console.log(query)
  db.run(query, [formData.firstname, formData.phone, formData.email, formData.environment, formData.foodStory])
}

function getData (){

}

server.use(express.static('static'))
server.listen(port)
