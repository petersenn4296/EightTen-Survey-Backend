const model = require('../model/survey.js')

function getAll(req, res, next) {
  model.getAll()
  .then(data => {
    res.json(data)
  })
}


module.exports = {
  getAll
}
