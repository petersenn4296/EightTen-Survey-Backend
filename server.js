let express = require('express')
let app = express()
let knex = require('./knex')
let bodyParser = require('body-parser')

let users = require('./routes/users')
let survey = require('./routes/survey')
let questions = require('./routes/questions')
let traits = require('./routes/traits')
let login = require('./routes/login')
let multiple_choice = require('./routes/multiple_choice')
let client_response = require('./routes/client_response')


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  res.send('Hello there, this is the EightTen survey app')
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/users', users)
app.use('/survey', survey)
app.use('/questions', questions)
app.use('/traits', traits)
app.use('/login', login)
app.use('/client_response', client_response)
app.use('/multiple_choice', multiple_choice)

let port = process.env.PORT || 3000

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})

module.exports = app
