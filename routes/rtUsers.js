"use strict";
const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router();

router.get('/', Controller.getUsers);
router.get('/services/:ServiceId/detail/:DetailId', Controller.getServiceDetail);
router.get('/:id/detail', Controller.getUserDetail);
router.get('/:id/detail/add', Controller.getAddDetail);
// router.post('/:id/detail/add', Controller.postAddDetail);
router.get('/:id/add', Controller.getAddService);
router.get('/:id/add/:ServiceId/detail', Controller.getAddDetail);

module.exports = router;