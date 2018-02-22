var mysql = require("mysql");

// var sql = "show databases";
var sql = "insert into node(place, hotel) values ?";
var values = [  //MULTI DIMENTIONAL ARRAY  // obj.map**  //Object.values**
    ['wonderla', 'plaza, ekm'],
    ['kodaikanal', 'star, kodai'],
    ['ooty', 'hills, udhagamandalam'],
];

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
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("\nInserted Rows: ", result.affectedRows); //AFFECTEDROWS
        console.log("\nInserted Id: ", result.insertId); //INSERTID
        console.log("\nField Count: ", result.fieldCount); //FIELDCOUNT
        console.log("\nChanged Rows: ", result.changedRows); //CHANGEDROWS

    });
});