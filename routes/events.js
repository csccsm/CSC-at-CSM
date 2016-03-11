'use strict'

let path = require('path');
let express = require('express');
let Event = require('../schemas/event');
let router = express.Router();

module.exports = function(app) {
  // Retrieve all events to show on page========================================
  router.get('/', function(req, res) {
    Event.find({}, function(err, docs) {
      if (err) {
        res.send(err);
      }
      console.log(docs);
      res.render('events', {events: docs});
    });
  });

  // Save new events============================================================
  router.post('/', function(req, res) {
    let newEvent = new Event();

    newEvent.title = req.body.title;
    newEvent.date = req.body.date;
    newEvent.description = req.body.description;

    newEvent.save(function(err,  docs) {
      if (err) throw err;
      console.log(newEvent);
      res.redirect('/events');
    });
  });
  return router;
 }
