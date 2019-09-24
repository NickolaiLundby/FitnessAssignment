'use strict';

const mongoose = require('mongoose');
//const Workout = mongoose.model('Workout');
const Workout = require('../models/workout');


module.exports.show = function (req, res) {
    console.log(req.params);
    //var workout = await Workout.findById(req.params.id)
    res.render('workout/show', { title: "Something"});
}

module.exports.showall = function (req, res){
    res.render('workout/showall', { title: "Workout programs" });
}

module.exports.new = function (req, res){
    res.render('workout/create', { title: "Create workout program"});
}


module.exports.create = async function(req, res){
    // Will move to model in next pull request
    var workout = new Workout(req.body);
    await workout.save();
    var id = workout._id.toString()
    console.log(id);
    res.redirect('/workout/show/id:${id}');
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
