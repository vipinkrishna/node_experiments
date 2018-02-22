var mc = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

//updateOne  //updateMany

mc.connect(url, function (err, db) {
    if (err) throw err;
    var query = { name: /^S/ };
    var change = { $set: { name: "RENI" } };
    db.db("ocean").collection("whirlpool").updateMany(query, change, function (err, res) {
        if (err) throw err;
        console.log("Updated! :", res.result.nModified);
    });
    db.close();
});