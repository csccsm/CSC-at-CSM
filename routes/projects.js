'use strict'

let express = require('express');
let Project = require('../schemas/project');
let router = express.Router();

module.exports = function(app) {
	router.get('/', function(req, res) {
  	Project.find({}, function(err, docs) {
			if (err) {
				res.send(err);
			}
			console.log(docs);
			res.render('projects', {projects: docs});
		});
  });

	router.post('/', function(req, res) {
		let newProject = new Project();

		newProject.title = req.body.title;
		newProject.description = req.body.description;
		newProject.link = req.body.link;
	});
	return router;
}
