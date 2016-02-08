var express = require('express');
var router = express.Router();

module.exports = function(app) {
	router.get('/projects', function(req, res) {
    	res.render('projects');
  	});
	return router;
}