const knex = require('../knex')

function postResponse(client_id, question_id, answer, score) {
  return knex('client_response')
    .insert({ "client_id": client_id, "question_id": question_id, "answer": answer, "score": score })
    .returning('*')
}

function getAll() {
  return knex('client_response')
}

module.exports = { postResponse, getAll }
