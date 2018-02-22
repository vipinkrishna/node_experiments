var fs = require("fs");
fs.unlink("input.txt",function(err){
    if(err){throw err}
    console.log("Deleted!");
})