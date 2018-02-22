var http = require("http");
var fs = require("fs");
http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') {
        res.writeHead(200, { 'Content-Type': 'image/x-icon' });
        res.end();
        return;
    }

    var filename = req.url.split("?")[0].slice(1);

    console.log("----------------------REQUEST-----------------------");

    if (filename) {
        var rs = fs.createReadStream(filename);

        rs.on("error", function (err) {
            console.log("ERROR: FILE NOT FOUND: ", filename);
            console.log("ERROR.STACK => ",err.stack);
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end("404 Not Found!");
        });

        rs.on("open", function () { console.log("OPEN: FILE OPENED: ", filename) });

        
        rs.on("data", function (chunk) {
            console.log("DATA: ", chunk);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("FILE OPENED: " + filename);
            res.end("<br />DATA: " + chunk);
            // rs.destroy();
        });

        rs.on("readable", function () { console.log("READABLE: ") });  //WORKS
        
        rs.on("end", function () { console.log("END: All data has been read!") });

        rs.on("close", function () { console.log("CLOSE: Stream destroyed! File closed!") });

    } else {
        console.log("ENTER FILENAME!");
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end("ENTER FILENAME!");
    }
}).listen(8080);