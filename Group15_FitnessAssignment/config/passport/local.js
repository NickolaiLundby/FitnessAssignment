'use strict';

// Module dependencies

const mongoose = require('mongoose');
const Local = require('passport-local').Strategy;
const User = mongoose.model('User');

module.exports = new Local({
    usernameField: 'email',
    passwordField: 'password'
},
function(email, password, done){
    const options = {
        critera: { email: email },
        select: 'email hashedpassword'
    };
    User.load(options, function(err, user){
        if (err) return done(err);
        if (!user) {
            return done(null, false, { message: 'Invalid user' });
        }
        if (!user.validatePassword(password)){
            return done(null, false, { message: 'Invalid passowrd' });
        }
        return done(null, user);
    })
});