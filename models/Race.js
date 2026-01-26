const mongoose = require("mongoose");

const RaceSchema = new mongoose.Schema({
  name: String,
  hippodrome: String,
  date: Date,
  horses: [
    {
      name: String,
      driver: String,
      odds: Number
    }
  ],
  status: {
    type: String,
    enum: ["upcoming", "finished"],
    default: "upcoming"
  },
  result: {
    type: Number,
    default: null
  }
});

module.exports = mongoose.model("Race", RaceSchema);
