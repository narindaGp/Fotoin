"use strict";
const express = require('express')
const Controller = require('../controllers/controller')
const router = express.Router();

router.get('/', Controller.getUsers);
router.get('/:id/detail', Controller.getUserDetail);
router.get(`/:id/delete`, Controller.deleteUser)
router.get('/:id/addService', Controller.getAddService);
router.get('/:id/edit', Controller.getEditService);
router.post('/:id/edit', Controller.postEditService);
router.get('/:id/detail/delete', Controller.getDeleteService);
router.get('/:id/add/galery', Controller.getEditService);
// =======
// router.get('/:id/detail/add', Controller.getAddDetail);
// // router.post('/:id/detail/add', Controller.postAddDetail);
// router.get('/:id/add', Controller.getAddService);
// router.get('/:id/add/:ServiceId/detail', Controller.getAddDetail);

module.exports = router;