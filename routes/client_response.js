const express = require('express')
const knex = require('../knex')
const router = express.Router()
const controller = require('../controller/client_response.js')


router.post('/', controller.postResponse)


module.exports = router;
