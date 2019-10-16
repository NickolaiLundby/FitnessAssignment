const express = require('express');

const app = express();

module.exports = app;

require('./backend/express')(app);
require('./backend/routes')(app);