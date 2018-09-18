const model = require('../model/multiple_choice')

function getAll(req, res, next) {
  model.getAll()
  .then(data => {
    res.json(data)
  })
}

function addMultipleChoice(req, res, next) {
  model.addMultipleChoice(req.body)
}

module.exports = {
  addMultipleChoice,
  getAll
}
