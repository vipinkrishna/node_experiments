// http://localhost:8080/INDIA?name=java&place=kanhangad
var http = require("http");
var url = require("url");
http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(req.url + "<br /><br />"); //PATH
	// var p = url.parse(req.url).path; //PATH
	var qry = url.parse(req.url).query; //QUERY //cannot access q.name  q.place
	var q = url.parse(req.url, true).query; //can access q.name q.place
	res.end(qry + "<br />" + q.name + "<br />" + q.place);
}).listen(8080);