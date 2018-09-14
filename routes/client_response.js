const express = require('express')
const knex = require('../knex')
const router = express.Router()
const controller = require('../controller/client_response.js')


router.post('/', controller.postResponse) // Submits a users's response for a question.
router.get('/', controller.getAll)//gets all


module.exports = router
