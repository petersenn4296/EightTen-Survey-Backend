const knex = require('../knex.js')

function getAll() {
  return knex
    .select('traits.id', 'trait', 'response')
    .from('traits')
    .innerJoin('trait_response', 'traits.id', 'trait_response.trait_id')
}

function editOne(id, name, response, responseId) {
  return knex('traits')
    .where('id', id)
    .update({
      "name": name
    })
    .then(()=>{
    return  knex('trait_response')
      .where('id', responseId)
      .update({
        "response": response
      }).then(() => {
        return getAll()
      })
    })
}

module.exports = {
  getAll,
  editOne
}
