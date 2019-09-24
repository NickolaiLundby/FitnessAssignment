'use strict';
const mongoose = require('mongoose');
//const Workout = mongoose.model('Workout');
const Workout = require('../models/workout');


module.exports.show = async function (req, res) {
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
    var workout = new Workout(req.body);
    await workout.save();
    var id = workout._id.toString()
    console.log(id);
    res.redirect('/workout/show/id:${id}');
}

