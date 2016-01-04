var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var router = express.Router();

module.exports = function(app) {
  router.use('/assets', express.static(__dirname + '/assets'));
  router.use(express.static(__dirname + '/views'))

  router.get('/', function(req, res) {
    res.send(path.join(__dirname + '/views/index.html'));
  });

  router.get('/events', function(req, res) {
    res.send(path.join(__dirname + '/views/events.html'));
  });

  router.get('/about', function(req, res) {
    res.send(path.join(__dirname + '/views/about.html'));
  });

  router.get('/contact', function(req, res) {
    res.send(path.join(__dirname + '/views/contact.html'));
  });

  router.get('/members', function(req, res) {
    res.send(path.join(__dirname + '/views/members.html'));
  });

  router.get('/projects', function(req, res) {
    res.send(path.join(__dirname + '/views/projects.html'));
  });
  return router;
}
