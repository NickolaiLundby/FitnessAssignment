'use strict';

// Module dependencies

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User schema
const WorkoutSchema = new Schema({
    title: { type: String, required: true, default: '' },
    excercises: [
        {
            name: { type: String, required: true, default: ''},
            description: { type: String, default: '', required: true},
            sets: { type: Number, required: true },
            repetitions: { type: String, required: true }
        }
    ]
});


// Methods

const Workout = mongoose.model('Workout', WorkoutSchema);

exports.createWorkout = async function(req, res){
    var workout = new Workout({
        title: req.body.title,
        excercises: []
    });
    await workout.save(function (err){
        if (err){
            console.log(`Error: ${err}`);
            return done(err);
        }
        else {
            res.redirect('/');
        }
    })
};