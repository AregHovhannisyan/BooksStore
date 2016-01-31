'use strict';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('bookStore:app');

debug('loading configuration');
var config = require('./config');

require('./init')(config);

var routes = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('env', config.env);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

debug('Initializing express: /api/v% server', config.apiVersion);
var apiServer = require('./api/v' + config.apiVersion);

app.use('/api/v' + config.apiVersion, apiServer);

app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function (err, req, res, next) {
  if (err.status !== 404) {
    console.error(err.stack || err);
  }

  res.status(err.status || 500).send({error: err});
});

module.exports = app;
