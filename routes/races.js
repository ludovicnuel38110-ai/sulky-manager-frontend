const express = require("express");
const Race = require("../models/races");

const router = express.Router();

router.get("/", async (req, res) => {
  const races = await Race.find().sort({ date: 1 });
  res.json(races);
});

router.post("/", async (req, res) => {
  const race = new Race(req.body);
  await race.save();
  res.json(race);
});

module.exports = router;
