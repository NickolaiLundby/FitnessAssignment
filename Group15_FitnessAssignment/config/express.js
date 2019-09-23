// Module dependencies

const express = require('express');
//const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

module.exports = function(app, passport){
    // Setup database here
    require('../models/db');
    
    // View engine setup
    app.set('views', path.join(__dirname + '/../', 'views'));
    app.set('view engine', 'pug');

    // Static files
    app.use(express.static(path.join(__dirname, 'public')));

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    

    // Passport for authentication
    app.use(passport.initialize());
    //app.use(passport.session());
}