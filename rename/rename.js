var fs = require("fs");
fs.rename("input.txt", "output.txt",function(err){
    if(err){throw err}
    console.log("Renamed!");
});