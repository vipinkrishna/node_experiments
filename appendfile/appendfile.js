var fs = require("fs");
fs.appendFile("input.txt","\nJava Programming", function(err){
    if(err){throw err.stack}
    console.log("Appended successfully!");
});