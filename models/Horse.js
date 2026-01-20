const mongoose = require("mongoose");

const HorseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  discipline: {
    type: String,
    default: "Trot"
  },

  stats: {
    speed: Number,
    endurance: Number,
    agility: Number,
    training: Number
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model("Horse", HorseSchema);
