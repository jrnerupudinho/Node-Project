const  http = require('http'); //Importing http module to use http functionality
const assignmentRoute = require('./assg1Route')
const server = http.createServer(assignmentRoute.handler); 
console.log(server)
server.listen(3000); //starts a process where node js will not exit the script immediately, so it will keep running to keep listening for the incoming requests