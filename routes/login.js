const express = require('express')
const knex = require('../knex')
const router = express.Router()
const controller = require('../controller/login.js')


router.post('/', controller.logIn) // Login route for admins and users.


module.exports = router
