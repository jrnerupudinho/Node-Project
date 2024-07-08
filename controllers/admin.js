const Product = require('../models/product');



exports.postAddProduct = (req,res,next) => {
    const title= req.body.title;
    const imageUrl= req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Product(title,imageUrl,description,price);
    product.save();
    res.redirect('/');
 };

exports.getAddProduct = (req,res,next) => {
    res.render('admin/add-product',{
        pageTitle: "Add Product", 
        path: '/admin/add-product', 
        formsCSS: true, 
        activeAddProduct: true, 
        productCss: true 
    });
};

exports.getProducts = (req, res, next) => {

    const products = Product.fetchAll((products)=>{
        res.render('admin/products',{
            prods: products, 
            pageTitle: 'Products', 
            path: '/admin/products',
    });
    }); 
};