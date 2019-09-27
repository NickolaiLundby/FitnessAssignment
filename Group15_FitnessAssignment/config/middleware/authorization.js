'use strict';

// Module dependencies

const mongoose = require('mongoose');
const User = require('../../models/user');

exports.isLoggedIn = async function(req) {
    try{
        await User.findUser(req.user.email);
        return true;
    } catch (err){
        return false;
    }
}