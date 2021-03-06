const model = require('../model/questions.js')

function getAll(req, res, next) {
  model.getAll()
  .then(data => {
    res.json(data)
  })
}

function getOneQuestion(req, res, next) {
  model.getOneQuestion(req.params.id)
    .then(data => {
      res.json(data)
    })
}

function getByTraitId(req, res, next) {
  model.getByTraitId(req.params.trait_id)
    .then(data => {
      res.json(data)
    })
}

function addQuestion(req, res, next) {
  model.addQuestion(req.body.survey_id, req.body.question, req.body.trait_id, req.body.type, req.body.nested_question)
    .then(data => {
      res.json(data)
    })
}

function editQuestion(req, res, next) {
  model.editQuestion(req.params.question_id, req.body.question, req.body.trait_id, req.body.type, req.body.nested_question, req.body.value)
    .then(data => {
      res.json(data)
    })
}

function deleteQuestion(req, res, next) {
  model.deleteQuestion(req.params.question_id)
    .then(data => {
      res.json(data)
    })
}

function getClientQuestions(req, res, next) {
  model.getClientQuestions(req.params.client_id)
    .then(data => {
      res.json(data)
    })
}

module.exports = {
  getAll,
  getOneQuestion,
  getByTraitId,
  addQuestion,
  editQuestion,
  deleteQuestion,
  getClientQuestions
}
