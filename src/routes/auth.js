const express = require('express');

const router = express.Router();

const  authController = require('../contollers/auth');

router.post('/register', authController.register);

module.exports = router;