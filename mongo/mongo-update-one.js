var mc = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

//updateOne  //updateMany

mc.connect(url, function (err, db) {
    if (err) throw err;
    var query = { name: "Chuck" };
    var change = { $set: { name: "RENI", address: "BAHRAIN" } };
    db.db("ocean").collection("whirlpool").updateOne(query, change, function (err, res) {
        if (err) throw err;
        console.log("Updated!");
    });
    db.close();
});