'use strict';

// Module dependencies
const User = require('./models/user');
const bcrypt = require('bcryptjs');

module.exports = function(app) {

    app.post('/register', function(res, req){
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(req.body.password, salt, function(err, hash){
                var user = new User({
                    email: req.body.email,
                    name: req.body.name,
                    hashedPassword: hash
                });
                user.save(function (err){
                if (err){
                    console.log(`Error: ${err}`);
                    res.send(err);
                }
                else {
                    res.send({data: "user created"});
                }
                });
            });
        });
    })

}