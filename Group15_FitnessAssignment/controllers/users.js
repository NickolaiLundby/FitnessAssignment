const userModel = require('../models/user');
const passport = require('passport');

module.exports.showLogin = function (req, res, next) {
    res.render('login', { title: 'Login' });
    };

module.exports.login = function (req, res, next) {
    /*passport.authenticate('local', { failureRedirect: '/login' }, function(req, res) {
        res.redirect('/')
    });*/
    };

module.exports.showRegister = function (req, res, next) {
    res.render('register', { title: 'Register' });
};

module.exports.register = function (req, res, next) {
   // userModel.createUser(req, res);
};