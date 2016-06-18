'use strict'

var express = require('express');
var Project = require('../schemas/project');
var router = express.Router();

module.exports = app => {
	/*
  The HTTP methods GET and POST are used. The GET method retrieves the data from the events collection in our MongoDB db. The POST method will send that data to the projects collection to be saved in the db.
  */
	// Retrieve all projectss to show on page=====================================
	router.get('/', (req, res) => {
  	Project.find({}, (err, docs) => {
			if (err) {
				res.send(err);
			}
			res.render('projects', {projects: docs});
		});
  });

	// Save new projects==========================================================
	router.post('/', (req, res) => {
		// Create new Project object
		var newProject = new Project({title: req.body.title, link: req.body.link, description: req.body.description});

		// Save new Project
		newProject.save(err => {
			if (err) {
				res.sendStatus(403);
			} else {
				res.redirect('/projects');
			}
		});
	});
	return router;
}
