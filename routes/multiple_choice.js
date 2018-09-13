const express = require('express')
const knex = require('../knex')
const router = express.Router()
const controller = require('../controller/multiple_choice.js')


router.get('/', controller.getAll) // Returns all multiple_choices and associated multiple_choice data.
router.post('/', controller.addMultipleChoice) // Inserts a new multiple_choice into a particular survey.
// router.patch('/:multiple_choice_id', controller.editMultipleChoice) // Edits an existing multiple_choice for a particular survey.

module.exports = router
