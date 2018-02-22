//npm install formidable

var http = require("http");
var formidable = require("formidable");
var fs = require("fs");
http.createServer(function (req, res) {
    if (req.url == "/uploadfile") {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {

            var defaultpath = files.fileuploadedname.path;
            var newpath = __dirname + "\\" + files.fileuploadedname.name;

            fs.rename(defaultpath, newpath, function (err) {
                if (err) throw err;
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write("FILE UPLOADED!");
                // console.log("TYPE: ",files.fileuploadedname.type);
                // console.log("SIZE: ",files.fileuploadedname.size);
                // console.log("METHOD: ",req.method); //POST
                // res.write(files.fileuploadedname.path);  //../../temp/upload_8cb8364d7efb4afe2bae15d2313e742d
                // res.write(files.fileuploadedname.name);  //logo.png
                // res.write(newpath);
                res.end();
            });
        });
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action = "uploadfile" method = "post" enctype = "multipart/form-data">');
        res.write('<input type = "file" name = "fileuploadedname">');
        res.write('<input type = "submit" value = "Upload File  ">');
        res.write('</form>');
        res.end();
    }
}).listen(8080);