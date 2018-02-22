var mc = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mc.connect(url, function (err, db) {
    if (err) throw err;
    db.db("ocean").collection("whirlpool").find().sort().limit(5).toArray(function (err, data) {
        if (err) throw err;
        console.log(data);
    })
    db.close();
});