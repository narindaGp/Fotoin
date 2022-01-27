"use strict";
const express = require('express')
const Controller = require('../controllers/userController')
const router = express.Router();

router.get('/', Controller.getUsers);
router.get('/:id/detail', Controller.getUserDetail);
router.get('/:id/addService', Controller.getAddService);

module.exports = router;