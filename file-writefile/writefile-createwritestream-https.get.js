var https = require("https");
var fs = require("fs");
fs.writeFile(__dirname + "/index.html", "<h1>HTML rocks!</h1>", function (err) {
	if (err) { return console.error(err) }
	console.log("Data written successfully!")
});
var dogjpg = "https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg";
var dogstream = fs.createWriteStream(__dirname + "/dog.jpg");
var grab = https.get(dogjpg, function (response) {
	response.pipe(dogstream);
});