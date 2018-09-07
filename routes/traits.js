const express = require('express')
const router = express.Router()
const controller = require('../controller/traits')

router.get('/', controller.getAll) // Retrieve all traits information
router.patch('/:trait_id', controller.editOne) // Edit specific trait information.

module.exports = router
