const knex = require('../knex.js')

//(Admin) get all users
function getAll() {
  return knex('survey')
}

function getOne(id) {
  return knex('survey')
    .where('survey.id', id)
    .join('questions', 'survey.id', 'questions.survey_id')
    .select('survey.name', 'survey.is_live', 'questions.question', 'questions.type', 'questions.nested_question', 'questions.is_archived', 'questions.id as question_id')
}

module.exports = {
  getAll,
  getOne
}
