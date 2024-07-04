const express = require('express');

const app = express();

app.use((req,res,next) => {
    console.log("Hi there")
    next();

}); //this is a middleware

// next allows the request to continue to the next middleware in line 

app.use('/users',(req,res,next) => {
    console.log("In the first middleware");
    res.send('<h1>Users</h1>');
});

app.use('/',(req,res,next) => {
    console.log("In the second middleware");
    res.send('<h1>Hello From Express!</h1>');
}); //this is a middleware

app.listen(3000);