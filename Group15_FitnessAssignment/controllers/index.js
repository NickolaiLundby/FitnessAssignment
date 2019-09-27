'use strict';

// Module dependencies
const Auth = require('../config/middleware/authorization');

exports.index = async function(req, res) {
    var loggedIn = await Auth.isLoggedIn(req);
    res.render('index', {title: 'Fitness App', loggedIn: loggedIn });
};