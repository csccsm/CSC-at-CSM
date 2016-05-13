'use strict'

let express = require('express');
let Event = require('../schemas/event');
let router = express.Router();

module.exports = function(app) {
  /*
  The HTTP methods GET and POST are used. The GET method retrieves the data from the events collection in our MongoDB db. The POST method will send that data to the events collection to be saved in the db.
  */
  // Retrieve all events to show on page========================================
  router.get('/', function(req, res) {
    Event.find({}, function(err, docs) {
      if (err) {
        res.send(err);
      }
      res.render('events', {events: docs});
    });
  });

  // Save new events============================================================
  router.post('/', function(req, res) {
    // Create a new Event object to be saved in the db
    let newEvent = new Event();
    newEvent.title = req.body.title;
    newEvent.date = req.body.date;
    newEvent.description = req.body.description;

    // Save new Event
    newEvent.save(function(err) {
      if (err) {
        res.sendStatus(403);
      } else {
        res.redirect('/events');
      }
    });
  });
  return router;
 }
