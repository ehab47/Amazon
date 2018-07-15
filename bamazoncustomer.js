var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",
    password: "root",

    database: "bamazon"
});
connection.connect()
connection.query("select * from products",function(err,result,filids){
    console.log(result)
})