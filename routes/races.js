const express = require("express");
const Race = require("../models/Race.");

const router = express.Router();

// Liste des courses
router.get("/", async (req, res) => {
  const races = await Race.find().sort({ date: 1 });
  res.json(races);
});

// Créer une course
router.post("/", async (req, res) => {
  const race = new Race(req.body);
  await race.save();
  res.json(race);
});

module.exports = router;
