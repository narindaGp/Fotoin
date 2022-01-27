"use strict";
const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router();


router.get('/', Controller.showService);
router.get('/:id', Controller.getDetail);
// router.get('/details', Controller.getDetail);

module.exports = router;