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
			res.render('projects', {projects: docs});
		});
  });

	router.post('/', function(req, res) {
		let newProject = new Project();

		newProject.title = req.body.title;
		newProject.link = req.body.link;
		newProject.description = req.body.description;

		newProject.save(function(err) {
			if (err) {
				res.sendStatus(403);
			} else {
				res.redirect('/projects');
			}
		});
	});
	return router;
}
