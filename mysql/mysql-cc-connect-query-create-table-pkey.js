var mysql = require("mysql");

// var sql = "show databases";
var sql = "create table customers(id int AUTO_INCREMENT PRIMARY KEY, name varchar(50), address varchar(50))";
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
        console.log("Table Created!");

    });
});