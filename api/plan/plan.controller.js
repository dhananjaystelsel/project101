var connection  = require('../dbConnection.js');
module.exports = {
	get:function (data,cb) {
			connection.query('SELECT * FROM employee', function (error, results, fields) {
			  if (error) throw error;
			  cb(null,results);
			});
		},		
		planPost:function (data,cb) {
			connection.query(data.query, function (error, results, fields) {
			  if (error) throw error;
			  cb(null,results);
			});
		},	
		planGet:function(data,cb){
			cb(null,data);
		}
}