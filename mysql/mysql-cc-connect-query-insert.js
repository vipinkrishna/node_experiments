var mysql = require("mysql");

// var sql = "show databases";
var sql = "insert into destination(place, hotel) values('munnar','jojo hotel')";
var host = "localhost";
var user = "reni";
var password = "reni";
var database = "travel";

var con = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

con.connect(function (err) {
    if (err) throw err;
    console.log(`${user}@${host} Connected!\n`);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 Record Inserted!");

    });
});