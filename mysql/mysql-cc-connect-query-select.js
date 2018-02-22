var mysql = require("mysql");

// var sql = "show databases";
// var sql = "select * from school.students";
var sql = "select * from students";

var con = mysql.createConnection({
    host: "localhost",
    user: "reni",
    password: "reni",
    database: "school"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        var heading = "";
        fields.map(column => { heading += column.name.toUpperCase() + "\t" }); //column.db  //column.table
        console.log(heading);
        result.map(row => console.log(row.rollno + "\t" + row.name));
    });
});