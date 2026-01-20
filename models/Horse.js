const mongoose = require("mongoose");

const HorseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  type: {
    type: String,
    enum: ["trot"],
    default: "trot"
  },

  // 🎯 STATS ACTUELLES
  stats: {
    speed: { type: Number, default: 0 },
    endurance: { type: Number, default: 0 },
    agility: { type: Number, default: 0 },
    training: { type: Number, default: 0 }
  },

  // 🧬 POTENTIEL MAX (GÉNÉTIQUE)
  maxStats: {
    speed: Number,
    endurance: Number,
    agility: Number,
    training: Number
  },

  ageDays: {
    type: Number,
    default: 0
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Horse", HorseSchema);
