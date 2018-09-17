const knex = require('../knex')
const bcrypt = require('bcryptjs')

function logIn(email, password) {
  let response
  let errorMessage
  return knex('users')
    .select('email', 'password', 'is_admin', 'first_name', 'id', 'company_name')
    .where('email', email)
    .then(result => {
      if(result.length !== 1) {
        errorMessage = 'Incorrect username or password.'
        response = { errorMessage }
      } else if (bcrypt.compareSync(password, result[0].password)) {
        const user = {
          client_id: result[0].id,
          first_name: result[0].first_name,
          is_admin: result[0].is_admin,
          company_name: result[0].company_name
        }
        response = user
      } else {
        errorMessage = 'Incorrect username or password.'
        response = { errorMessage }
      }
      return response
    })
}

module.exports = { logIn }
