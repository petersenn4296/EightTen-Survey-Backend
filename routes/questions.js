'use strict';

const express = require('express');
const knex = require('../knex')
const router = express.Router();
const controllerz = require('../controller/questions.js')



router.get('/', controllerz.getAll)
// router.get('/:id', controllerz.getOne)
// router.post('/', controllerz.makeOne)
// router.patch('/:id', controllerz.editOne)
// router.delete('/:id', controllerz.deleteOne)


module.exports = router;
