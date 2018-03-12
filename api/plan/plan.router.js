var express = require('express')
var planController = require('./plan.controller.js');
var router = express.Router()
// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res) {
		planController.get("Birds home page123",function(err,data){
			res.send(data);
		})
});

router.post('/planPost', function (req, res) {
		console.log(req.body);
		planController.planPost(req.body,function(err,data){
			res.send(data);
		})
});

router.post('/planGet', function (req,res) {
		planController.planGet(req.body,function(err,data){
			res.send(data);
		})
  
});


module.exports = router;