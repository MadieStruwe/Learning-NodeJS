//must have 'upper case' pachage installed
//to install package
	//in terminal run npm insall upper-case
	
var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(uc("Hello Madie"));
	res.end();
}).listen(8080);