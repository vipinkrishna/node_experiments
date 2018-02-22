var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "reni",
    password: "reni"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("create database travel", function (err, result) {
        if (err) throw err;
        console.log("Database Created!");
    });
});