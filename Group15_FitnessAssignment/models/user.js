'use strict';

// Module dependencies

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

// User schema
const UserSchema = new Schema({
    name: { type: String, default: '' },
    email: { type: String, unique: true, default: '' },
    hashedPassword: { type: String, default: '' }
});

// Validations

// Maybe validate that username isnt taken?
UserSchema.path('name').validate(function(username){
    return username.length;
}, 'Invalid name');

// Maybe validate that email isnt taken?
UserSchema.path('email').validate(function(email){
    return email.length;
}, 'Invalid email');

UserSchema.path('hashedPassword').validate(function(hashedPassword){
   return hashedPassword.length; 
}, 'Invalid password');

// Methods

UserSchema.methods = {
    // Validate password
    validatePassword: async function(user, password) {
        console.log(`hash ${user.hashedPassword}`)
        await bcrypt.compare(password, user.hashedPassword).then(function (res){
            if (res) {
                console.log('Valid password')
                return true;
            } else {
                console.log('Invalid password')
                return false;
            }
        });
    },

    // TODO: When saving goes well, just redirect to /login with user info.
    createUser: function(req, res){
        bcrypt.hash(req.body.password, 10).then(async function(hash){
            var user = new UserSchema({
                email: req.body.email,
                name: req.body.name,
                hashedPassword: hash
            });
            await user.save(function (err){
                if (err){
                    console.log(`Error: ${err}`);
                    return done(err);
                }
                else {
                    res.redirect('/login');
                }
            })
        })
    }
};

mongoose.model('User', UserSchema);