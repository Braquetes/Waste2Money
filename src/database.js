const mysql = require('mysql');
const dotenv = require('dotenv')
// dotenv.config({path: '../.env'})
dotenv.config()

//  const mysqlConnection = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: 'password',
//    database: 'WASTE2MONEYDB',
//    multipleStatements: true
//  });

var mysqlConnection = mysql.createConnection({
  host: process.env.HOST, 
  user: process.env.MYSQL_USER, 
  password: process.env.PASSWORD, 
  database: process.env.DATABASE, 
  port: 3306
});



mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
