const express = require('express');
const path = require('path')

const shopController = require('../controllers/shop');
 

const router = express.Router();


router.get('/', shopController.getIndex); //this is a middleware
router.get('/products', shopController.getProducts);
router.get('/carts', shopController.getCart);
router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);
module.exports = router;