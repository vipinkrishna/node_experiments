
var http = require("http");
var { URL } = require("url");

const myurl = new URL("http://example.org/foo#bar");
console.log(myurl.hash);

myurl.hash = "bee";
console.log(myurl.href);
console.log(myurl.origin);

