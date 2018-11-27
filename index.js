const phoneValidationRegex = new RegExp("((\+|00)?[1-9]{2}|0)[1-9]( ?[0-9]){8}")

const express = require('express')
const bodyParser =require('body-parser')
const logger = require('morgan')
const port = 8080

server = express()
server.use(logger('dev'))
server.use(bodyParser.urlencoded({extended: true}))
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
    foodStory: req.body['foodStory'],
  }
// TODO: add phone number validation, remove other validation infrastructure
  console.log(template_vars.firstname + "template_vars")
  const validity_check = {
    phoneValid: phoneValid(template_vars)
  }
  console.log(template_vars)
  res.render('webform', template_vars)
})

// replace server.post with :
// server.post('/webform.html', handleFormSubmission(req, res))
//
// function handleFormSubmission(req, res){
//   const template_vars = {
//     firstname: req.body['firstname'],
//     firstnameValid: firstNameValid(),
//     phone: req.body['phone'],
//     phoneValid: phoneValid(),
//     email: req.body['email'],
//     : (),
//     environment: req.body['environment'],
//     environmentValid: environmentValid(),
//     foodStory: req.body['foodStory'],
//     foodStoryValid: foodStoryValid()
//   }
//   console.log(template_vars)
//   res.render('webform', template_vars)
// }

// Do same for server setup

server.use(express.static('static'))
server.listen(port)

// TODO: alternately, check validity in a single formIsValid fn, using:
// return ! (template_vars.name === undefined) ||
          // template_vars.phoneValid === problematic)

/// this could be saved as locals.errors and passed to ejs form template: if locals.errors{there were errors in your form}
function firstNameValid(template_vars) {
  return ! template_vars.firstname === undefined
}

function phoneValid(template_vars) {
  return true
}

// TODO: add functions validating fields here
// call them in server.post
