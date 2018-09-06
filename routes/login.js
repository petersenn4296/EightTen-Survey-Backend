const express = require('express')
const knex = require('../knex')
const router = express.Router()
const controller = require('../controller/login.js')


router.post('/', controller.logIn)


module.exports = router;
