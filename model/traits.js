const knex = require('../knex.js')

function getAll() {
  return knex
    .select('response', 'trait_response.trait_id')
    .from('traits')
    .innerJoin('trait_response', 'traits.id', 'trait_response.trait_id')
}

function getOne(id) {
  return knex
    .select('response', 'trait_id')
    .from('trait_response')
    .where('trait_id', id)

}

function editOne(id, response, trait_id) {
    return  knex('trait_response')
      .where('trait_response.trait_id', trait_id)
      .update({
        "response": response
      }).then(() => {
        return getAll()
      })
}

module.exports = {
  getAll,
  getOne,
  editOne
}
