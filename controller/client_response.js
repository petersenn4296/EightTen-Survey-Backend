const model = require('../model/client_response.js')

function postResponse(req, res, next) {
  model.postResponse(req.body.client_id, req.body.question_id, req.body.answer)
    .then(data => {
      console.log(data);
    })
}

module.exports = {
  postResponse
}
