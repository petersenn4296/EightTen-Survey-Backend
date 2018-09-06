const knex = require('../knex.js')

//(Admin) get all users
function getAll() {
  return knex('questions')
}

module.exports = {getAll}
