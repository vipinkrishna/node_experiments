var http = require("http");
var dt = require("./exports-date");
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(dt.mydate());
	res.end("Hello");
}).listen(8080);