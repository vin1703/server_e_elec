const express = require('express');

const router = express.Router();

const cartControllers = require('../Controllers/cart-controllers');

// const checkAuth = require('../middleware/check-auth');

router.get('/',cartControllers.getCart);

// router.use(checkAuth);

router.post('/',cartControllers.createCartItem);

module.exports = router;

