'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ActivitySchema = new Schema({
  date: {
      type: String,
      required: true,
  },
  comment: {
      type: String,
      required: true
  },
  user: {type: Schema.ObjectId, ref: 'User'},
  workout: {
      type: String,
      required: true
  }
});

const Activity = mongoose.model('Activity', ActivitySchema);

// Methods

exports.findActivities = async function(id){
    try {
        return await Activity.find({user: id});
    } catch{
        return new [];
    }
}

exports.createActivity = async function(req, res){
    var activity = new Activity({
        date: req.body.date,
        comment: req.body.comment,
        user: req.user._id,
        workout: req.body.workout
    });
    await activity.save(function (err){
        if (err){
            console.log(`Error: ${err}`);
            return done(err);
        }
        res.redirect('/activity/show');
    });
}