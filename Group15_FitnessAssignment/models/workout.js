'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
      type: String,
      required: true,
  },
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

mongoose.model('Workout', WorkoutSchema);