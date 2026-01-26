const mongoose = require("../config/db");

const horseSchema = new mongoose.Schema({
  name: String,
  age: Number,
  speed: Number
});

module.exports = mongoose.model("Horse", horseSchema);
