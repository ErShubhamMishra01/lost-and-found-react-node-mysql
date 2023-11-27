var mysql=require('mysql');
require('dotenv').config();

var db_host=process.env.DB_HOST;
var db_user=process.env.DB_USER;
var db_database=process.env.DB_NAME;
var db_port=process.env.DB_PORT;
var db_password=process.env.DB_PASSWORD;

const con=mysql.createConnection({
    host:db_host,
    database:db_database,
    user:db_user,
    password:db_password,
    port:db_port
});
con.connect(function(err){
    if(err) throw err;
    console.log('Connected');
});

module.exports.con=con;