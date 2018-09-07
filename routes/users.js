'use strict';

const express = require('express');
const knex = require('../knex')
const router = express.Router();
const controller = require('../controller/users.js')



router.get('/', controller.getAll)//get all users info
router.get('/:id', controller.getOne)//get one user info
router.get('/:id/responses', controller.getResults)//get results by user ID
router.patch('/:id', controller.isViewed)
router.post('/', controller.signUp)
// router.patch('/:id', controller.editOne)
// router.delete('/:id', controller.deleteOne)


module.exports = router;
