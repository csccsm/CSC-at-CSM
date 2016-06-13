var express = require('express');
var router = express.Router();

module.exports = app => {
	router.get('/', (req, res) => {
    	res.render('members');
  	});
	return router;
}
