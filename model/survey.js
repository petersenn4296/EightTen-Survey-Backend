const knex = require('../knex.js')

//(Admin) get all users
function getAll() {
  return knex('survey')
}

function getOne(id) {
  return knex('survey')
    .where('id', id)

}

module.exports = {
  getAll,
  getOne
}
