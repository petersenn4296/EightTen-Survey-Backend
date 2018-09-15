const model = require('../model/client_response.js')

function postResponse(req, res, next) {
  console.log('cr controller req>>>>>>>>>>>>', req.body);
  model.postResponse(req.body.client_id, req.body.question_id, req.body.answer, req.body.score)
    .then(data => {
      console.log('data controller data>>>>>>>>>>>>', data);
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
