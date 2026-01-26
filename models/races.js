const mongoose = require("mongoose");

const raceSchema = new mongoose.Schema({
  name: String,
  date: Date,
  horses: [String],
});

module.exports = mongoose.model("Race", raceSchema);
