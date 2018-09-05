const knex = require('../knex.js')

let joinedTraits = knex.select('traits.id', 'name', 'response').from('traits').innerJoin('trait_response', 'traits.id', 'trait_response.trait_id')

//(Admin) get all traits and responses for admin
function getAll() {
  return joinedTraits
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
