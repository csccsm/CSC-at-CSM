var path = require('path');
var express = require('express');
var app = express();

var ip = process.env.IP || '127.0.0.1' || 'localhost';
var port = process.env.PORT || 8080;

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/events', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/events.html'));
});

app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/about.html'));
});

app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/contact.html'));
});

app.get('/members', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/members.html'));
});

app.get('/projects', function(req, res) {
  res.sendFile(path.join(__dirname + '/views/projects.html'));
});
// Launch server================================================================
app.listen(port);
console.log('%s:Server starting at %s:%d', Date(Date.now()), ip, port);
