const { URL } = require('url');
const myURL = new URL('https://abc:xyz@example.com');
console.log(myURL.username);
console.log(myURL.password);
// Prints xyz

myURL.password = '123';
console.log(myURL.href);
// Prints https://abc:123@example.com
