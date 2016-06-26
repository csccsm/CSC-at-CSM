var express = require('express');
var Event = require('../schemas/event');
var router = express.Router();

module.exports = app => {
  router.get('/', (req, res) => {
    // Find all events so they can be shown on the home page
    Event.find({}, (err, docs) => {
      if (err) { res.send(err); }
      res.render('index', {events: docs});
    });
  });
  return router;
 }
