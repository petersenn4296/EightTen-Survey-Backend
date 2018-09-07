const model = require('../model/traits.js')

function getAll(req, res, next) {
  model.getAll()
  .then(data => {
    res.json(data)
  })
}

function editOne(req, res, next) {
  model.editOne(req.params.id, req.body.name, req.body.response, req.body.trait_response_id)
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    next(err)
  })
}

module.exports = {
  getAll,
  editOne
}