"use strict";
const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router();


router.get('/', Controller.showService);
router.post('/:id/add', Controller.postAddService);


module.exports = router;