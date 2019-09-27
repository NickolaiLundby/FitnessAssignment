'use strict';

// Module dependencies
const User = require('../models/user');
const mongoose = require('mongoose');
const Auth = require('../config/middleware/authorization');

exports.showLogin = async function (req, res, next) {
    var loggedIn = await Auth.isLoggedIn(req);
    res.render('user/login', { title: 'Login', loggedIn: loggedIn });
};

exports.showRegister = async function (req, res, next) {
    var loggedIn = await Auth.isLoggedIn(req);
    res.render('user/register', { title: 'Register', loggedIn: loggedIn });
};

exports.register = async function (req, res) {
    var loggedIn = await Auth.isLoggedIn(req);
    try {
        User.createUser(req, res);
    }
    catch (err) {
        console.log(err);

        res.render('user/register',{
        title: 'Register',
        loggedIn: loggedIn
    });
    }
};

exports.logout = async function (req, res) {
    req.logout();
    res.redirect('/login');
};