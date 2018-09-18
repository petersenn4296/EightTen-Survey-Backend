const model = require('../model/client_response.js')

function postResponse(req, res, next) {
  model.postResponse(req.body.client_id, req.body.question_id, req.body.answer, req.body.score)
    .then(data => {
      res.json(data)
    })
}

function getAll(req, res, next) {
  model.getAll()
  .then(data => {
    res.json(data)
  })
}

module.exports = {
  postResponse,
  getAll
}
