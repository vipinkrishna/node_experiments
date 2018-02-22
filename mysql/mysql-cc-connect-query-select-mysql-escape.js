var mysql = require("mysql");

// var sql = "show databases";
// var sql = "select * from school.students";
var findname = "dheeraj";
var sql = "select * from students where name = " + mysql.escape(findname);
//MYSQL.ESCAPE from SQL INJECTION (? is also used as a PLACEHOLDER to escape)

var con = mysql.createConnection({
    host: "localhost",
    user: "reni",
    password: "reni",
    database: "school"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result, fields) {  //fields[0].db fields[0].table fields[0].name
        if (err) throw err;
        var heading = "";
        fields.map(column => { heading += column.name.toUpperCase() + "\t" }); //column.db  //column.table
        console.log(heading);
        result.map(row => console.log(row.rollno + "\t" + row.name));
    });
});