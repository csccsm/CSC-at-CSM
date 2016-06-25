'use strict'

var express = require('express');
var Event = require('../schemas/event');
var router = express.Router();

module.exports = app => {
  /*
  The HTTP methods GET and POST are used. The GET method retrieves the data from the events collection in our MongoDB db. The POST method will send that data to the events collection to be saved in the db.
  */
  // Retrieve all events to show on page========================================
  router.get('/', (req, res) => {
    // Find all MongoDB documents from the events collection
    Event.find({}, (err, docs) => {
      if (err) { res.send(err); }
      res.render('events', {events: docs});
    });
  });

  // Save new events============================================================
  router.post('/', (req, res) => {
    // Create a new Event object to be saved in the db
    var newEvent = new Event({
      title: req.body.title,
      date: req.body.date,
      description: req.body.description
    });

    // Save new event
    newEvent.save(err => {
      if (err) { res.sendStatus(403); } // Replace this with a flash message
      res.redirect('/events');
    });
  });

  // Finds the event user clicks on and shows all information
  router.get('/:id', (req, res) => {
    Event.findById(req.params.id, (err, doc) => {
      if (err) { res.sendStatus(403); }
      res.render('show', {events: doc, current: req.params.id});
    });
  });
  return router;
 }
