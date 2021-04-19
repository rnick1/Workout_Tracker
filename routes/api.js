const Workout = require("../models/workout.js");

module.exports = function(app){
app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
})
// Find a method that limits this search to a range.
app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
    })

// ====================================================
    app.post("/api/workouts", (req, res) => {
        Workout.create({})
          .then(data => {
            res.json(data)
          })
          .catch(err => {
            res.json(err)
          });
          console.log(data)
        })
// =====================================================
    app.put("api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
            params.id, 
            {$push: {exercises:body}},
            {new: true}
        )
        .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.status(400).json(err);
          });
        });
}
// GET request
// GET request
// PUT request
// POST request
