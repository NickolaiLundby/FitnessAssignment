'use strict';

// Module dependencies
const mongoose = require('mongoose');
const Auth = require('../config/middleware/authorization');

exports.show = async function (req, res, next) {
    var loggedIn = await Auth.isLoggedIn(req);
    res.render('activity/show', { title: 'Activity', loggedIn: loggedIn });
};