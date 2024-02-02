const express = require('express');

const router = express.Router();

const productControllers = require('../Controllers/products-controllers');

router.get('/',productControllers.getProducts);

router.post('/',productControllers.createProduct);

module.exports = router;