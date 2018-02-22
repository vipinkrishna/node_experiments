//npm install formidable

var http = require("http");
var formidable = require("formidable");
var path = require("path");
var fs = require("fs");


http.createServer(function (req, res) {
    if (req.url == "/uploadfile") {

        var form = new formidable.IncomingForm();
        var uploadFolder = path.join(__dirname, "/uploads");
        !fs.existsSync(uploadFolder) && fs.mkdirSync(uploadFolder);
        form.uploadDir = uploadFolder;

        form.parse(req, function (err, fields, files) {
            // console.log(files.fileuploadedname.path);
            // console.log(files.fileuploadedname.name);

            fs.rename(files.fileuploadedname.path, path.join(uploadFolder, files.fileuploadedname.name), function (err) {
                if (err) throw err;
            });

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("FILE UPLOADED!");
            res.end();
        });
    }
    else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action = "uploadfile" method = "post" enctype = "multipart/form-data">');
        res.write('<input type = "file" name = "fileuploadedname" multiple="multiple">');
        res.write('<input type = "submit" value = "Upload File  ">');
        res.write('</form>');
        res.end();
    }
}).listen(8080);