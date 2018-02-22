var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/donko";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Connected/Created!");
    db.close();
});