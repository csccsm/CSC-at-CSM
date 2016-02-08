var express = require('express');
var router = express.Router();

module.exports = function(app) {
	router.get('/contact', function(req, res) {
    	res.render('contact');
  	});
  	return router;
}