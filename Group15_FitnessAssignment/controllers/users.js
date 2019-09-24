'use strict';

// Module dependencies
const User = require('../models/user');
const mongoose = require('mongoose');
//const User = mongoose.model('User');



exports.showLogin = function (req, res, next) {
    res.render('user/login', { title: 'Login' });
    };

/*exports.login = function (req, res, next) {
    passport.authenticate('local', { failureRedirect: '/login' }, function(req, res) {
        res.redirect('/')
    });
    };*/

exports.showRegister = function (req, res, next) {
    res.render('user/register', { title: 'Register' });
};

exports.register = function (req, res) {
    try {
        User.createUser(req, res);
    }
    catch (err) {
        console.log(err);

        res.render('user/register',{
        title: 'Register'
    });
    }
};