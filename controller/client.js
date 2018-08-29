const model = require('../model/client.js')

function getAll(req, res, next) {
  model.getAll()
  .then(data => {
    res.json(data)
  })
}

function getOne(req, res, next) {
  model.getOne(req.params.id)
  .then(data => {
    if(data.length < 1) {
      res.status(404).json({error: 'not found'})
    } else {
      res.json(data[0])
    }
  })
}

function makeOne(req, res, next) {
  model.makeOne(req.body.name, req.body.title, req.body.company_name, req.body.size, req.body.location, req.body.email, req.body.tel, req.body.pin)
  .then(data => {
    res.json(data[0])
  })
}

function editOne(req, res, next) {
  console.log('req body id', req.body.id);
  model.editOne(req.params.id, req.body.name, req.body.title, req.body.company_name, req.body.size, req.body.location, req.body.email, req.body.tel, req.body.pin)
  .then((data) => {
    res.send(data[0])
  })
  .catch((err) => {
    next(err)
  })
}

function deleteOne(req, res, next) {
  model.deleteOne(req.params.id)
  .then((data) => {
    res.send(data[0])
  })
  .catch((err) => {
    next(err)
  })
}

module.exports = {
  getAll,
  getOne,
  makeOne,
  editOne,
  deleteOne
}
