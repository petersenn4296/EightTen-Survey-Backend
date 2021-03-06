const express = require('express')
const knex = require('../knex')
const router = express.Router()
const controller = require('../controller/questions.js')


router.get('/', controller.getAll) // Returns all questions and associated question data.
router.get('/:id', controller.getOneQuestion) // Returns a specific question and its associated data.
router.post('/', controller.addQuestion) // Inserts a new question into a particular survey.
router.patch('/:question_id', controller.editQuestion) // Edits an existing question for a particular survey.
router.delete('/:question_id', controller.deleteQuestion) // Delete an existing question by question_id.
router.get('/trait_id/:trait_id', controller.getByTraitId) // Returns all questions and associated question data.
router.get('/client_id/:client_id', controller.getClientQuestions) // Returns questions that have not already been answered by a particular client.



module.exports = router
