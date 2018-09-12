const knex = require('../knex.js')

function getAll() {
  return knex
    .select('trait_response.id', 'trait', 'response')
    .from('traits')
    .innerJoin('trait_response', 'traits.id', 'trait_response.trait_id')
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
  editOne
}
