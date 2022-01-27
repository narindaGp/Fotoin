"use strict";
const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router();

router.get('/');
router.post('/:id/add', Controller.postAddService);

module.exports = router;