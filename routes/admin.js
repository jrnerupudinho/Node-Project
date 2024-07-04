const express = require('express');
const path = require('path');

const rootDir = require('../helper/path')

const router = express.Router(); // It is like mini  express app plugable to other express app

router.get('/add-product',(req,res,next) => {
    res.sendFile(path.join(rootDir,'views','add-product.html'))});

router.post('/add-product',(req,res,next) => {
    console.log(req.body); // provides the incoming data as an JS object
    res.redirect('/');
});

module.exports = router;