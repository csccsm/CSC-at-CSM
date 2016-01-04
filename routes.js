var path = require('path');
var express = require('express');
var router = express.Router();

module.exports = function(app) {
  router.use('/assets', express.static(__dirname + '/assets'));
  router.use(express.static(__dirname + '/views'));

  router.get('/', function(req, res) {
    res.send(path.join(__dirname + '/views/index'));
  });

  router.get('/events', function(req, res) {
    res.send(path.join(__dirname + '/views/events'));
  });

  router.get('/about', function(req, res) {
    res.send(path.join(__dirname + '/views/about'));
  });

  router.get('/contact', function(req, res) {
    res.send(path.join(__dirname + '/views/contact'));
  });

  router.get('/members', function(req, res) {
    res.send(path.join(__dirname + '/views/members'));
  });

  router.get('/projects', function(req, res) {
    res.send(path.join(__dirname + '/views/projects'));
  });
  return router;
}
