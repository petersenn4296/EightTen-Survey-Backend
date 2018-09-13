const knex = require('../knex.js')

function getAll() {
  return knex('questions')
}

function getOneQuestion(question_id) {
  return knex('questions')
    .where('id', question_id)
}

function getByTraitId(trait_id) {
  return knex('questions')
    .where('trait_id', trait_id)
}

function addQuestion(survey_id, question, trait_id, type, nested_question=null) {
  return knex('questions')
    .insert({
    "survey_id": survey_id,
    "trait_id": trait_id,
    "question": question,
    "type": type,
    "nested_question": nested_question
    })
    .returning('*')
}

function editQuestion(question_id, question, trait_id, type, value, nested_question=null) {
  return knex('questions')
    .where('id', question_id)
    .update({
      "trait_id": trait_id,
      "question": question,
      "type": type,
      "value": value,
      "nested_question": nested_question
    })
    .returning('*')
}

function deleteQuestion(question_id) {
  return knex('questions')
    .where('id', question_id)
    .first()
    .del()
}

module.exports = {
  getAll,
  getOneQuestion,
  getByTraitId,
  addQuestion,
  editQuestion,
  deleteQuestion
}
