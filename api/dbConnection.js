var mysql      = require('mysql');
const config = require('./config.js')
var connection = mysql.createConnection({
  host     : config.HOST,
  user     : config.USER,
  password : config.PASSWORD,
  database : config.DATABASE
});
connection.connect();
module.exports = connection;