// const products = [];
const fs = require('fs');
const path = require('path');
const p = path.join(
    path.dirname(require.main.filename),
    "data",
    "products.json"
  );
const getProductsFromFile = cb => {
     // static is a keyword that defines properties or methods that belong to a class itself rather than the objects created from that class 

        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([]);
            }
            else {
            cb(JSON.parse(fileContent));
            }
        });
}

module.exports = class Product {
    constructor(title, imageUrl, description, price){
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }
    save() {
        // products.push(this);
        getProductsFromFile(products=> {  
        products.push(this);
        fs.writeFile(p,JSON.stringify(products),(err)=>{
            console.log(err);
        });  
        });
    }
    static fetchAll(cb) {
        getProductsFromFile(cb);
        // return products;
    }
}