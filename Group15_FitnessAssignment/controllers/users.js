'use strict';

// Module dependencies

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.showLogin = function (req, res, next) {
    res.render('user/login', { title: 'Login' });
    };

exports.login = function (req, res, next) {
    /*passport.authenticate('local', { failureRedirect: '/login' }, function(req, res) {
        res.redirect('/')
    });*/
    };

exports.showRegister = function (req, res, next) {
    res.render('register', { title: 'Register' });
};

exports.register = function (req, res, next) {
   // userModel.createUser(req, res);
};