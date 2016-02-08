var path = require('path');
var express = require('express');
var Event = require('../schemas/event');
var router = express.Router();

module.exports = function(app) {
  router.get('/events', function(req, res) {
    Event.find({}, function(err, docs) {
      if (err) {
        res.send(err);
      }
      console.log(docs);
      res.render('events', {events: docs});
    });
  });
  return router;
 }