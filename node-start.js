const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type':'text/html'});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello World\n');  //res.write cannot be empty 
    res.end();  //res.end can be empty 
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});