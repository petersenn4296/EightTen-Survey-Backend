const knex = require('../knex.js')

//(Admin) get all traits and responses for admin
function getAll() {
  return knex
    .select('trait_response.id', 'trait', 'response')
    .from('traits')
    .innerJoin('trait_response', 'traits.id', 'trait_response.trait_id')
}

//(Admin) update a traits response and/or name
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
