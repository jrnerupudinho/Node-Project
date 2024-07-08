const Product = require('../models/product');

exports.getProducts = (req,res,next) => {
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, 'views','shop.html')); //This is the way to use by adding files, path join detects the os and runs accordingly, dirname gives the path that the file that we are using
    const products = Product.fetchAll((products)=>{
        res.render('shop/product-list',{
            prods: products, 
            pageTitle: 'All Products', 
            path: '/products',
    });
    }); 
};

exports.getIndex = (req, res, next) => {

    const products = Product.fetchAll((products)=>{
        res.render('shop/index',{
            prods: products, 
            pageTitle: 'Shop', 
            path: '/',
    });
    }); 
};

exports.getCart = (req,res,next) => {
    res.render('shop/cart',{
    path: '/cart',
    pageTitle: 'Your Cart'
})
};
exports.getOrders = (req,res,next) => {
    res.render('shop/orders',{
    path: '/orders',
    pageTitle: 'Your Orders'
})
};
exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout',{
    path: '/checkout',
    pageTitle: 'Check Out'
})
};