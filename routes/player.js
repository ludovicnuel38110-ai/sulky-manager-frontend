const express = require("express");
const auth = require('../middleware/auth')
const User = require("../models/User");
const Horse = require("../models/Horse");

const router = express.Router();

/**
 * 📥 Récupérer les chevaux du joueur
 */
router.get("/horses", auth, async (req, res) => {
  const user = await User.findById(req.user.id).populate("horses");
  res.json(user.horses);
});

/**
 * ➕ Créer un cheval (5 max)
 */
router.post("/horses", auth, async (req, res) => {
  const { name } = req.body;

  const user = await User.findById(req.user.id).populate("horses");

  if (user.horses.length >= 5) {
    return res.status(400).json({ message: "Limite de 5 chevaux atteinte" });
  }

  const horse = new Horse({
    name,
    owner: user._id,
    stats: {
      speed: Math.floor(Math.random() * 20) + 40,
      endurance: Math.floor(Math.random() * 20) + 40,
      agility: Math.floor(Math.random() * 20) + 40,
      training: Math.floor(Math.random() * 20) + 40
    }
  });

  await horse.save();

  user.horses.push(horse._id);
  await user.save();

  res.status(201).json(horse);
});

module.exports = router;
