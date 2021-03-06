'use strict'

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var path = require('path');
var logger = require('morgan');
var express = require('express');
var mongoose = require('mongoose');
var helmet = require('helmet');
var db = require('./db');

var app = express();

var ip = process.env.IP || '127.0.0.1' || 'localhost';
var port = process.env.PORT || 8080;

// Connect to database==========================================================
mongoose.connect(db.uri);

// Security Configuration=======================================================
app.set('trust proxy', 1);
app.use(cookieSession({
  secret: 'Yaaa babeh 1738',
  cookie: {
    secure: true,
    httpOnly: true
  }
}));
app.use(helmet());

// Express Configuration========================================================
/*
Setup all static content
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/assets'));
app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

// Configure routes=============================================================
/*
This tells express to send all the actions done in each route file to be sent to the url which is the first argument. If no page is found, render the 404 page.
*/
app.use('/', require('./routes/index')(app));
app.use('/about', require('./routes/about')(app));
app.use ('/events', require('./routes/events')(app));
app.use('/contact', require('./routes/contact')(app));
app.use('/members', require('./routes/members')(app));
app.use('/projects', require('./routes/projects')(app));
app.use((req, res) => {
  res.status(404).render('404');
});

// Launch server================================================================
app.listen(port);
console.log('%s:Server starting at %s:%d', Date(Date.now()), ip, port);
