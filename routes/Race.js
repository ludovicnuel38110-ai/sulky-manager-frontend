const express = require("express");
const Horse = require("../models/Horse");
const auth = require('../middleware/auth')
const generateGenetics = require("../utils/generateGenetics");

const router = express.Router();

// ➕ Créer un cheval
router.post("/create", auth, async (req, res) => {
  try {
    const { name } = req.body;
    const userId = req.user.id;

    if (!name) {
      return res.status(400).json({ message: "Nom requis" });
    }

    // Limite à 5 chevaux
    const horseCount = await Horse.countDocuments({ owner: userId });
    if (horseCount >= 5) {
      return res.status(400).json({ message: "Limite de 5 chevaux atteinte" });
    }

    const genetics = generateGenetics();

    const horse = new Horse({
      name,
      owner: userId,
      maxStats: genetics
    });

    await horse.save();
    res.status(201).json(horse);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erreur création cheval" });
  }
});

// 📄 Lister les chevaux du joueur
router.get("/", auth, async (req, res) => {
  const horses = await Horse.find({ owner: req.user.id });
  res.json(horses);
});

module.exports = router;
