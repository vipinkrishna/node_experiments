var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

//deleteOne deleteMany

var query = { address: "Mountain 21" };

mongoClient.connect(url, function (err, db) {
    db.db("ocean").collection("whirlpool").deleteOne(query, function (err, obj) {
        if (err) throw err;
        console.log("Deleted! :",obj.result.n );
    });
    db.close();
});