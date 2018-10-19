//when this code is run, in the address bar add a string, like
//summer or winter and it will display /summer or /winter

var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  //res.write('Hello World!'); //write a response to the client
  res.writeHead(200, {'Content-Tyoe': 'text/html'});
  res.write(req.url); 
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080