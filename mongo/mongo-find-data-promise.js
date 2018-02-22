var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function (err, db) {
    var promis = db.db("ocean").collection("whirlpool").find().toArray();  //RETURN PROMISE
    promis.then(function(data){data.forEach(document=>console.log(document.name + "\t\t" + document.address))},function(err){console.log(err.stack)});
    db.close();
});