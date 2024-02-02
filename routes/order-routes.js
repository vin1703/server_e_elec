const express = require('express');

const router = express.Router();

const orderControllers = require('../Controllers/order-controllers');

// const checkAuth = require('../middleware/check-auth');

router.get('/',orderControllers.getOrder);

// router.use(checkAuth);

router.post('/',orderControllers.createOrderItem);

module.exports = router;

