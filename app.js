
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
// const expressHbs = require('express-handlebars');

const app = express();

// app.engine('hbs', expressHbs.engine({ extname: "hbs", defaultLayout: "main-layout", layoutsDir: "views/layouts/", }));
// app.set('view engine', 'pug'); //pug is supported by express 
// app.set('view engine','hbs');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error');
// app.use((req,res,next) => {
//     console.log("Hi there")
//     next();

// }); //this is a middleware

// next allows the request to continue to the next middleware in line 

app.use(bodyParser.urlencoded({extended: false})); //registers the middleware and calls the next in the end. This allows normal forms alone but not files 
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.pageNotFound);

app.listen(3000);