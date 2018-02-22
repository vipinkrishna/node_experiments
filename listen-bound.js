var http = require("http");
var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-type': 'text/html' });
	res.end('Hello World!');
});
server.listen(8080, function () { console.log("Bound!") });