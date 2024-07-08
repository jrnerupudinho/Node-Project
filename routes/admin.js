const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router(); // It is like mini  express app plugable to other express app


router.get('/add-product',adminController.getAddProduct);

router.get('/products',adminController.getProducts);

router.post('/add-product',adminController.postAddProduct);

module.exports = router;