let express = require('express')
let app = express()
let port = process.env.PORT || 3000
let knex = require('./knex')

app.get('/', function(req, res, next) {
  res.send('Hello there')
})

app.listen(port, function(){
  console.log(`Listening on port ${port}`);
})
