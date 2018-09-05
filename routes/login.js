'use strict';

const express = require('express');
const knex = require('../knex')
const router = express.Router();
const controllerz = require('../controller/login.js')




router.post('/', controllerz.makeOne)


module.exports = router;
