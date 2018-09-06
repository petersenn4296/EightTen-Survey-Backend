let express = require('express')
let app = express()
let knex = require('./knex')
let bodyParser = require('body-parser')

let client = require('./routes/client')
// let survey = require('./routes/survey')
// let questions = require('./routes/questions')
let traits = require('./routes/traits')
let login = require('./routes/login')



app.get('/', function(req, res, next) {
  res.send('Hello there, this is the EightTen survey app')
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/client', client)
// app.use('/survey', survey)
// app.use('/questions', questions)
app.use('/traits', traits)
app.use('/login', login)


let port = process.env.PORT || 3000

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})

module.exports = app
