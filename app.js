
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'pug'); //pug is supported by express 
app.set('views', 'views');

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// app.use((req,res,next) => {
//     console.log("Hi there")
//     next();

// }); //this is a middleware

// next allows the request to continue to the next middleware in line 

app.use(bodyParser.urlencoded({extended: false})); //registers the middleware and calls the next in the end. This allows normal forms alone but not files 
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'))
    res.status(404).render('page-not-found',{pageTitle:'Page Not Found'});
});

app.listen(3000);