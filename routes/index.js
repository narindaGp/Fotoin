"use strict";
const express = require('express')
const Controller = require('../controllers/userController')
const router = express.Router();
const routeUsers = require('./rtUsers')
const routeServices = require('./rtServices')
const routeDetails = require('./rtDetails')

router.get('/');
router.use('/users', routeUsers);
router.use('/services', routeServices);
router.use('/details', routeDetails);

module.exports = router;