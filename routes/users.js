'use strict';

const express = require('express');
const knex = require('../knex')
const router = express.Router();
const controllerz = require('../controller/users.js')



router.get('/', controllerz.getAll)//get all users info
router.get('/:id', controllerz.getOne)
router.get('/:id/responses', controllerz.getResults)
router.patch('/:id', controllerz.isViewed)
// router.post('/', controllerz.makeOne)
// router.patch('/:id', controllerz.editOne)
// router.delete('/:id', controllerz.deleteOne)


module.exports = router;
