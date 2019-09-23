// Module dependencies

const express = require('express');
const join = require('path').join;
const fs = require('fs');
const passport = require('passport');

// Require all mongoose models

const models = join(__dirname, '/models');
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^.].*\.js$/))
  .forEach(file => require(join(models, file)));

const app = express();

module.exports = app;

// Bootstrap
require('./config/passport')(passport);
require('./config/express')(app, passport);
require('./config/routes')(app, passport);