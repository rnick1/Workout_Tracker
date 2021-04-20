const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const opts = { toJSON: { virtuals: true } };

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
  type: {
      type: String,
      trim: true,
      required: "A workout type is required."
  },
  name: {
    type: String,
    trim: true,
    required: "Enter a name for this workout."
  },
  duration: {
    type: Number,
  },
  weight: {
    type: Number
  },
  reps: {
      type: Number
  },
  sets: {
      type: Number
  },
  distance: {
      type: Number
  }
}
  ],
}, opts);

workoutSchema.virtual('totalDuration').get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;

// // From the Mongoose Documentation...possibly useful for the duration functionality:

// // const userSchema = mongoose.Schema({
// //   email: String
// // });
// // Create a virtual property `domain` that's computed from `email`.

// // ==============================================================
// workoutSchema.virtual('totalDuration').get(function() {
//   return this.exercises.reduce((total, exercise) => {
//     return total + exercise.duration;
//   }, 0);
// });
// // ==============================================================

// // JavaScript array method that might work:
// .reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// }, 10)

