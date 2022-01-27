"use strict";
const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router();

router.get('/', Controller.getUsers);
router.get('/:id/detail', Controller.getUserDetail);
router.get('/:id/addService', Controller.getAddService);
router.get('/:id/edit', Controller.getEditService);
router.post('/:id/edit', Controller.postEditService);
module.exports = router;