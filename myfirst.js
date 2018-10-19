//to run node filename.js
//computer now runs as a server yay
//so go to localhost:8080 to see it

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);