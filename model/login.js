const knex = require('../knex')
const bcrypt = require('bcryptjs')

function logIn(email, password) {
  let response
  let errorMessage = []
  return knex('users')
    .select('email', 'password', 'is_admin', 'first_name')
    .where('email', email)
    .then(result => {
      if(result.length !== 1) {
        errorMessage.push('Incorrect username.')
        response = { errorMessage }
      } else if (bcrypt.compareSync(password, result[0].password)) {
        const user = {
          first_name: result[0].first_name,
          is_admin: result[0].is_admin
        }
        response = user
      } else {
        errorMessage.push('Incorrect password.')
        response = { errorMessage }
      }
      return response
    })
}

module.exports = { logIn }
