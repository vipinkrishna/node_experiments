var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Host Connected!");
    var dbo = db.db("ocean");
    console.log("Database Connected!");
    var data = { name: "java", place: "khd south" };
    
    dbo.collection("ship").insert(data, function (err, res) {
        if (err) throw err;
        console.log("Document Inserted!");
    });

    dbo.collection("island").insert(data, function (err, res) {
        if (err) throw err;
        console.log("Document Inserted!");
    });

    db.close();
});