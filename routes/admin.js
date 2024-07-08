const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router(); // It is like mini  express app plugable to other express app


router.get('/add-product',productsController.getAddProduct);

router.post('/add-product',productsController.addNewProduct);

module.exports = router;