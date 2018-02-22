// use shop

// db.products.insert({_id:501, name:"Milkybar"})
// db.products.insert({_id:502, name:"Cake"})
// db.products.insert({_id:503, name:"Icecream"})

// db.orders.insert({_id:1, productid: 501, status:1})
// db.orders.insert({_id:2, productid: 502, status:1})
// db.orders.insert({_id:3, productid: 503, status:1})
// db.orders.insert({_id:4, productid: 502, status:1})
// db.orders.insert({_id:5, productid: 501, status:1})
// db.orders.insert({_id:6, productid: 501, status:1})

// db.orders.aggregate()

// db.orders.aggregate({$lookup:{from:"products", localField:"productid", foreignField:"_id", as:"orderdetails"}})


var mongoClient = require("mongodb").MongoClient;
var uri = "mongodb://localhost:27017";

mongoClient.connect(uri, function (err, db) {
    if (err) throw err;
    var joinquery = [{ $lookup: { from: 'products', localField: 'productid', foreignField: '_id', as: 'orderdetails' } }];
    db.db("shop").collection("orders").aggregate(joinquery).toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        // console.log(res);
    })
    db.close();
});