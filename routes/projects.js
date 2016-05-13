'use strict'

let express = require('express');
let Project = require('../schemas/project');
let router = express.Router();

module.exports = function(app) {
	/*
  The HTTP methods GET and POST are used. The GET method retrieves the data from the events collection in our MongoDB db. The POST method will send that data to the projects collection to be saved in the db.
  */
	// Retrieve all projectss to show on page=====================================
	router.get('/', function(req, res) {
  	Project.find({}, function(err, docs) {
			if (err) {
				res.send(err);
			}
			res.render('projects', {projects: docs});
		});
  });

	// Save new projects==========================================================
	router.post('/', function(req, res) {
		// Create new Project object
		let newProject = new Project();
		newProject.title = req.body.title;
		newProject.link = req.body.link;
		newProject.description = req.body.description;

		// Save new Project
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
