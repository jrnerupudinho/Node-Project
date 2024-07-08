const express = require('express');
const path = require('path')

const rootDir = require('../helper/path');
const adminData = require('./admin');

const router = express.Router();



router.get('/',(req,res,next) => {
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, 'views','shop.html')); //This is the way to use by adding files, path join detects the os and runs accordingly, dirname gives the path that the file that we are using
    const products = adminData.products
    console.log(products)
    res.render('shop',{
        prods: products, 
        pageTitle: 'Shop', 
        path: '/',
        hasProducts: products.length >0,
        activeShop: true,
        productCSS: true,
    
    }); // This is where shop.pug is called
}); //this is a middleware

module.exports = router;