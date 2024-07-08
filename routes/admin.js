const express = require('express');
const path = require('path');

const rootDir = require('../helper/path');

const router = express.Router(); // It is like mini  express app plugable to other express app

const products = [];

router.get('/add-product',(req,res,next) => {
    // res.sendFile(path.join(rootDir,'views','add-product.html'))});
    res.render('add-product',{
        pageTitle: "Add Product", 
        path: '/admin/add-product', 
        formsCSS: true, 
        activeAddProduct: true, 
        productCss: true 
    });
});

router.post('/add-product',(req,res,next) => {
   products.push({title: req.body.title}); // provides the incoming data as an JS object
    res.redirect('/');
});

exports.routes = router;
exports.products = products;