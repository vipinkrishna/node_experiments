var fs = require("fs");

fs.readFile("input.txt", function (err, data) {
    if (err) { return console.log(err.stack) }
    fs.writeFile("output.txt", data, function (err) {
        if (err) { return console.log(err.stack) }
        console.log("Data written successfully!");
    });
});
