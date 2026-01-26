const mongoose = require("../config/db");

const raceSchema = new mongoose.Schema({
  name: String,
  date: Date,
  horses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Horse" }]
});

module.exports = mongoose.model("Race", raceSchema);
