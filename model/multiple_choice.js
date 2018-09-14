const knex = require('../knex.js')

function getAll() {
  return knex('multiple_choice')
}

// function editMultipleChoice() {
//   return knex('MultipleChoices')
//     .where('id', MultipleChoice_id)
//     .update({
//       "trait_id": trait_id,
//       "MultipleChoice": MultipleChoice,
//       "type": type,
//       "value": value,
//       "nested_MultipleChoice": nested_MultipleChoice
//     })
//     .returning('*')
// }

function addMultipleChoice(data) {
  for (let id in data) {
    data[id].forEach(choice => {
      return knex('multiple_choice')
        .insert({
        "question_id": id,
        "answer": choice.answer,
        "value": choice.value
      })
      .then(() => {})
    })
  }
}

module.exports = {
  addMultipleChoice,
  getAll
}
