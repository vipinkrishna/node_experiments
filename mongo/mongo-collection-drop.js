var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    db.db("python").collection("script").drop(function (err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Deleted Collection!");
    });
    db.close();
});