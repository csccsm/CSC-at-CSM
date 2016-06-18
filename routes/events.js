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
    Event.find({}, (err, docs) => {
      if (err) {
        res.send(err);
      }
      res.render('events', {events: docs});
    });
  });

  // Save new events============================================================
  router.post('/', (req, res) => {
    // Create a new Event object to be saved in the db
    var newEvent = new Event({title: req.body.title, date: req.body.date, description: req.body.description});

    // Save new Event
    newEvent.save(err => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.redirect('/events');
      }
    });
  });
  return router;
 }
