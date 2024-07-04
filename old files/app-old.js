const  http = require('http'); //Importing http module to use http functionality
// recevies request and provides response

const route = require('./route');
// function requestListener(req, res){

// }

// http.createServer(requestListener);

const server = http.createServer(route.handler); 
// console.log(server)
server.listen(3000); //starts a process where node js will not exit the script immediately, so it will keep running to keep listening for the incoming requests