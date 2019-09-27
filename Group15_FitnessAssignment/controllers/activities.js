'use strict';

// Module dependencies
const mongoose = require('mongoose');
const Workout = require('../models/workout');
const Activity = require('../models/activity');
const Auth = require('../config/middleware/authorization');

exports.show = async function (req, res, next) {
    var loggedIn = await Auth.isLoggedIn(req);
    var activities = await Activity.findActivities(req.user._id);
    var workouts = await Workout.findWorkoutsByUser(req.user._id);
    res.render('activity/show', { title: 'Activity', loggedIn: loggedIn, activities: activities, workouts: workouts });
};

exports.add = async function(req, res, next){
    Activity.createActivity(req, res);
}