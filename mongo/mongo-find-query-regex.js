var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

//findOne find find({},{_id:0, name:1, address:1})
//find({}, {address:0})  //EXCLUDES address

var query = {address:/^S/};

mongoClient.connect(url, function (err, db) {
    db.db("ocean").collection("whirlpool").find(query).toArray(function (err, data) {
        if (err) throw err;
        data.map(document=>console.log(document.name + "\t\t" + document.address));
    });
    db.close();
});