const express = require('express')
var bodyParser = require('body-parser')
const config = require('./config.js')
var { makeExecutableSchema } = require('graphql-tools');
const graphqlHTTP = require('express-graphql')

const app = express();
app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
});



app.get('/', (req, res) => res.send('Hello World!'))
var plan = require('./plan/plan.router.js')
app.use('/plan',plan);

var planSchema = require('./plan/plan.graphQl.js')

//var schema = makeExecutableSchema(planSchema);
app.use('/all',function(req,res,next){
	console.log("CALL_GRAPHQL");
	next();
},graphqlHTTP(req=>{
	console.log(req.body);
    return {
      schema: planSchema
    }
}));


app.listen(config.PORT, () => console.log('Example app listening on port'+config.PORT+"!"))