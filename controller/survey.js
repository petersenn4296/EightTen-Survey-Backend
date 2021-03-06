const model = require('../model/survey.js')

function getAll(req, res, next) {
  model.getAll()
  .then(data => {
    res.json(data)
  })
}

function getOne(req, res, next) {
  model.getOne(req.params.survey_id)
  .then(data => {
    res.json(data)
  })
}

module.exports = {
  getAll,
  getOne
}
