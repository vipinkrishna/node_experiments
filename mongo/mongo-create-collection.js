var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.db("ocean").createCollection("ships", function (err, res) {
        if (err) throw err;
        console.log("Created Collection!");
    });
    db.close();
});