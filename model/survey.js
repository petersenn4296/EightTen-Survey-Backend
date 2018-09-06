const knex = require('../knex.js')

//(Admin) get all users
function getAll() {
  return knex('survey')
}

module.exports = {getAll}
