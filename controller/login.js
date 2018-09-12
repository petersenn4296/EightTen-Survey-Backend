const model = require('../model/login.js')

function logIn(req, res, next) {
  const email = req.body.email
  const password = req.body.password
  if(!email || !password) {
    res.status(404).json({errorMessage: 'Please enter email and password.'})
  } else {
    model.logIn(email, password)
      .then(result => {
        if(result.errorMessage) {
          res.status(400).json(result.errorMessage)
        } else {
          res.status(200).json(result)
        }
      })
  }
}

module.exports = {
  logIn
}
