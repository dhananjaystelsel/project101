var { makeExecutableSchema } = require('graphql-tools');
const graphqlHTTP = require('express-graphql')
var connection  = require('../dbConnection.js');

var  planSchema={
typeDefs : `
  type Query {
    empget:[user],
    empName(name:String!):[user]
  },
  type user{
    Name:String
    Phone:String
  }
`,
resolvers: {
  Query:{
    empget:function(){
    return new Promise(function(resolve, reject){
            connection.query("SELECT * FROM employee", function (error, results, fields) {
              if (error) throw error;
              resolve(results);
            });   
           });
    },
    empName:function(root,data){
    return new Promise(function(resolve, reject){
            connection.query("SELECT * FROM employee where Name='"+ data.name+"'", function (error, results, fields) {
              if (error) throw error;
              resolve(results);
            });   
           });  
    }
  }
}
}
module.exports  = makeExecutableSchema(planSchema);
/// makeExecutableSchema({typeDefs, resolvers});