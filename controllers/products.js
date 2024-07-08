const Product = require('../models/product');

exports.getAddProduct = (req,res,next) => {
    // res.sendFile(path.join(rootDir,'views','add-product.html'))});
    res.render('add-product',{
        pageTitle: "Add Product", 
        path: '/admin/add-product', 
        formsCSS: true, 
        activeAddProduct: true, 
        productCss: true 
    });
};

exports.addNewProduct = (req,res,next) => {
    // products.push({title: req.body.title}); // provides the incoming data as an JS object
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
 };

 exports.getProducts = (req,res,next) => {
    // console.log(adminData.products)
    // res.sendFile(path.join(rootDir, 'views','shop.html')); //This is the way to use by adding files, path join detects the os and runs accordingly, dirname gives the path that the file that we are using
    const products = Product.fetchAll((products)=>{
        res.render('shop',{
            prods: products, 
            pageTitle: 'Shop', 
            path: '/',
            hasProducts: products.length >0,
            activeShop: true,
            productCSS: true,
    });
    }); // This is where shop.pug is called
};

