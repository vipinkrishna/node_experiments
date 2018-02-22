var mc = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mc.connect(url, function (err, db) {
    if (err) throw err;
    db.db("python").dropCollection("script", function (err, delOK) {
        if (err) throw err;
        if (delOK) console.log("Collection Deleted!");
    });
    db.close();
});