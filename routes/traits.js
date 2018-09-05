const express = require('express')
const router = express.Router()
const controllerz = require('../controller/traits')

router.get('/', controllerz.getAll)
router.patch('/:id', controllerz.editOne)

module.exports = router
