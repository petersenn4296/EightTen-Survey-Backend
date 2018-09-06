const knex = require('../knex')
const bcrypt = require('bcryptjs')

function logIn(username, password) {
  let response
  let errorMessage = []
  let table
  let field
  if (username === 'rich' || username === 'peter' || username === 'jeff' || username === 'peter') {
    table = 'users'
    field = 'username'
  } else {
    table = 'clients'
    field = 'email'
  }
  return knex(table)
  .select(field, 'password')
  .where(field, username)
  .then(result => {
    if(result.length !== 1) {
      errorMessage.push('Incorrect username.')
      response = {errorMessage}
    } else if (bcrypt.compareSync(password, result[0].password)) {
      const user = {
        [field]: result[0].field,
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
