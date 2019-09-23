'use strict';

// Module dependencies
const Workout = require('../models/workout');
const mongoose = require('mongoose');



exports.showCreateWorkout = function (req, res, next) {
    res.render('workout/create', { title: 'Create Workout' });
    };

exports.createWorkout = function (req, res, next) {
    try {
        Workout.createWorkout(req, res);
    }
    catch (err) {
        console.log(err);

        res.render('workout/create',{
        title: 'Create Workout'
    });
    }
    };