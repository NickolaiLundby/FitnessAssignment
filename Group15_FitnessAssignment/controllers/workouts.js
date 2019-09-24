'use strict';

const mongoose = require('mongoose');
//const Workout = mongoose.model('Workout');
const Workout = require('../models/workout')

module.exports.show = async function (req, res) {
    var workout = await Workout.findWorkout(req.params.id);
    res.render('workout/show', {workout: workout})
}

module.exports.showall = async function (req, res){
    var workouts = await Workout.findWorkoutsByUser(req.user._id);
    res.render('workout/showall', { title: "Workout programs:", workouts: workouts});
}

module.exports.new = function (req, res){
    res.render('workout/create', { title: "Create workout program"});
}

module.exports.create = function(req, res){
    Workout.createWorkout(req, res);
}

module.exports.addExercise = function(req, res){
    Workout.addExercise(req.params.id, req, res);
}

/*
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
 */
