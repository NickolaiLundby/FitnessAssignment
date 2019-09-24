'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  title: {
      type: String,
      required: true,
  },
  user: {type: Schema.ObjectId, ref: 'User'},
  exercises: [{
      name: {
          type: String,
          required: true
      },
      description: {
        type: String,
        required: true
      },
      set: {
          type: Number,
          required: true
      },
      reps_time: {
          type: Number,
          required: true
      }
  }]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

// Methods

exports.createWorkout = async function(req, res){
    var workout = new Workout({
        title: req.body.title,
        user: req.user._id,
        excercises: []
    });
    await workout.save(function (err){
        if (err){
            console.log(`Error: ${err}`);
            return done(err);
        }
        else {
            res.redirect('/workout/show/'+workout._id);
        }
    })
}

exports.findWorkout = async function(id) {
    return await Workout.findById(id, function (err, workout) {
        if (err) { return done(err); }
        else return workout;
})
}

exports.addExercise = async function(id, req, res){
    var workout = await Workout.findById(id);
    workout.exercises.push({name: req.body.name, description: req.body.description, set: req.body.set, reps_time: req.body.reps_time});
    await workout.save();
    res.redirect('/workout/show/'+workout._id);
}

exports.findWorkoutsByUser = async function(id){
    return await Workout.find({user: id});
}

mongoose.model('Workout', WorkoutSchema);


/*

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
*/
