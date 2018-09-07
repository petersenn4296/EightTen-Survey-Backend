const knex = require('../knex')

function postResponse(client_id, question_id, answer) {
  return knex('client_response')
    .insert({ "client_id": client_id, "question_id": question_id, "answer": answer })
    .returning('*')
}

module.exports = { postResponse }
