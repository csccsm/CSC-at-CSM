var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var router = express.Router();
var db = require('./db');

var ip = process.env.IP || '127.0.0.1' || 'localhost';
var port = process.env.PORT || 8080;

// Connect to database=========================================================
mongoose.connect(db.uri);


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/assets'));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser());

// Configure routes============================================================
app.get('/', require('./routes/index')(app));
app.get('/events', require('./routes/events')(app));
app.get('/about', require('./routes/about')(app));
app.get('/contact', require('./routes/contact')(app));
app.get('/members', require('./routes/members')(app));
app.get('/projects', require('./routes/projects'))

// Launch server===============================================================
app.listen(port);
console.log('%s:Server starting at %s:%d', Date(Date.now()), ip, port);
