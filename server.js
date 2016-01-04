var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');
var app = express();

var ip = process.env.IP || '127.0.0.1' || 'localhost';
var port = process.env.PORT || 8080;

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser());

// Configure routes=============================================================
app.use('/', require('./routes')(app));

// Launch server================================================================
app.listen(port);
console.log('%s:Server starting at %s:%d', Date(Date.now()), ip, port);
