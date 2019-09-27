'use strict';

const mongoose = require('mongoose');
const Workout = require('../models/workout');
const Auth = require('../config/middleware/authorization');

module.exports.show = async function (req, res) {
    var loggedIn = await Auth.isLoggedIn(req);
    var workout = await Workout.findWorkout(req.params.id);
    res.render('workout/show', {workout: workout, loggedIn: loggedIn});
};

module.exports.showall = async function (req, res){
    var loggedIn = await Auth.isLoggedIn(req);
    var workouts = await Workout.findWorkoutsByUser(req.user._id);
    res.render('workout/showall', { title: "Workout programs", workouts: workouts, loggedIn: loggedIn});
};

module.exports.new = async function (req, res){
    var loggedIn = await Auth.isLoggedIn(req);
    res.render('workout/create', { title: "Create workout program", loggedIn: loggedIn});
};

module.exports.create = function(req, res){
    Workout.createWorkout(req, res);
};

module.exports.addExercise = function(req, res){
    Workout.addExercise(req.params.id, req, res);
};