const express = require('express');

const router = express.Router();

const userControllers = require('../Controllers/users-controllers');

router.post('/signup',userControllers.signup);

router.post('/login',userControllers.login);

module.exports = router;