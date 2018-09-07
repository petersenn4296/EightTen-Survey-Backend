'use strict';

const express = require('express');
const knex = require('../knex')
const router = express.Router();
const controller = require('../controller/survey.js')



router.get('/', controller.getAll) // Returns list of all surveys
router.get('/:survey_id', controller.getOne) // Retrieve all questions for a particular survey
// router.post('/', controller.addQuestion)
// router.patch('/:id', controller.editOne)
// router.delete('/:id', controller.deleteOne)


module.exports = router;
