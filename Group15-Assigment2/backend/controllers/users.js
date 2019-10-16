'use strict';

// Module dependencies
const User = require('../models/user');

exports.register = function (req, res) {
    try {
        return User.createUser(req, res);
    }
    catch (err) {
        res.send(err);
    }
};

exports.logout = async function (req, res) {
    req.logout();
    res.redirect('/login');
};