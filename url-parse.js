// http://localhost:8080/index.html?name=java&place=goa
var http = require("http");
var url = require("url");

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	
	// var p = url.parse(req.url, true);
	var adr = 'http://localhost:8080/default.htm?year=2017&month=february#foobar';
	var p = url.parse(adr, true);

	// var output = p.protocol; //  http:
	// var output = p.query.year;  //2017
	// var output = p.query.month;  //february

	// var output = p.href;  //   http://localhost:8080/default.htm?year=2017&month=february#foobar
	// var output = p.hash;   //#foobar


	// var filename = req.url.split("?")[0].slice(1); //  index.html
	// var output = p.host; //  localhost:8080
	// var output = req.url; //  /index.html?name=java&place=goa
	var output = p.hostname; //  localhost
	// var output = p.origin; //  http://localhost  //NOT WORKS
	// var output = p.path; //  /index.html?name=java&place=goa
	// var output = p.pathname; //  /index.html
	// var output = p.search; //  ?name=java&place=goa
	res.end(output);
}).listen(8080);