const mongoose = require("mongoose");

const HorseSchema = new mongoose.Schema({
  name: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  type: {
    type: String,
    enum: ["trot"],
    default: "trot"
  },

  age: { type: Number, default: 2 },

  genetics: {
    speed: Number,
    endurance: Number,
    agility: Number,
    training: Number
  },

  stats: {
    speed: { type: Number, default: 0 },
    endurance: { type: Number, default: 0 },
    agility: { type: Number, default: 0 },
    training: { type: Number, default: 0 }
  },

  lastProgress: {
    type: Date,
    default: Date.now
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Horse", HorseSchema);
