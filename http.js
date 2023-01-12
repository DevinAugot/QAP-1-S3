// Author: Devin Augot
// Date: Jan 12, 2023

// Here I will be showing the best use for the http global object

// Http global object's main use is to provide a way of making Node.js transfer data over HTTP, its main method's are as following: createClient(), createServer(), get(), globalAgent(), request() some of which ill put into practice below as a demostration.

// this is requiring the module putting it to use
const http = require("http");

// this is setting the host name specifying the ip address
const hostName = "127.0.0.1";

// set port for http to listen to

const port = 8080;

// now create the server using createServer() function using request and response arguments so the http create server function will request and in turn get the response from the server to get up and running

const server = http.createServer((req, res) => {
  res.statusCode = 200; // will give status of success

  res.setHeader("Content-Type", "text/plain"); // specifys the output/content type

  res.end("Using the HTTP global object is fun!"); // res.end() function is used to end the response process it also returns the value of the parameter/object given
});

// server.listen is a callback function that returns the Http address your server is running on
server.listen(port, hostName, () => {
  console.log(`Server up and running at http://${hostName}:${port}/`);
});
