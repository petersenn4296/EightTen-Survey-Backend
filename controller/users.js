const model = require('../model/users.js')

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

function getResults(req, res, next){
  model.getResults(req.params.id)
  .then(data => {
    res.json(data)
  })
}

function loadResults(req, res, next){
  model.loadResults(req.params.id)
    .then(data => {
      res.json(data)
    })
}

function isViewed(req, res, next){
  model.isViewed(req.params.id, req.body.is_viewed)
  .then(data => {
    res.json(data)
  })
}

function signUp(req, res, next) {
  model.signUp(req.body.first_name, req.body.last_name, req.body.title, req.body.company_name, req.body.size, req.body.location, req.body.email, req.body.tel, req.body.password)
  .then(data => {
    console.log('what is happening? idd it work?', data);
    res.json(data[0])
  })
}
//
// function editOne(req, res, next) {
//   console.log('req body id', req.body.id);
//   model.editOne(req.params.id, req.body.name, req.body.title, req.body.company_name, req.body.size, req.body.location, req.body.email, req.body.tel, req.body.pin)
//   .then((data) => {
//     res.send(data[0])
//   })
//   .catch((err) => {
//     next(err)
//   })
// }
//
// function deleteOne(req, res, next) {
//   model.deleteOne(req.params.id)
//   .then((data) => {
//     res.send(data[0])
//   })
//   .catch((err) => {
//     next(err)
//   })
// }

module.exports = {
  getAll,
  getOne,
  getResults,
  loadResults,
  isViewed,
  signUp,
  // editOne,
  // deleteOne
}
