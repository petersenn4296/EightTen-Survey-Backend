const model = require('../model/multiple_choice')

function getAll(req, res, next) {
  model.getAll()
  .then(data => {
    res.json(data)
  })
}

// function editMultipleChoice(req, res, next) {
//   model.editMultipleChoice(req.params.question_id, req.body.question, req.body.trait_id, req.body.type, req.body.nested_question, req.body.value)
//     .then(data => {
//       res.json(data)
//     })
// }

function addMultipleChoice(req, res, next) {
  model.addMultipleChoice(req.body)
    // .then(data => {
    //   res.json(data[0].id)
    // })
}

module.exports = {
  addMultipleChoice,
  getAll
}
