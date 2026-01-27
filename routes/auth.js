const express = require("express");
const bcrypt = require("bcryptjs");
const Player = require("../models/player");

const router = express.Router();

// ============================
// INSCRIPTION
// ============================
router.post("/register", async (req, res) => {
  try {
    const { pseudo, password } = req.body;

    if (!pseudo || !password) {
      return res.status(400).json({ error: "Pseudo et mot de passe requis" });
    }

    const existing = await Player.findOne({ pseudo });
    if (existing) {
      return res.status(400).json({ error: "Pseudo déjà utilisé" });
    }

    const hash = await bcrypt.hash(password, 10);

    const player = await Player.create({
      pseudo,
      password: hash,
      balance: 0
    });

    res.json({
      message: "Compte créé",
      pseudo: player.pseudo,
      balance: player.balance
    });

  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// ============================
// CONNEXION
// ============================
router.post("/login", async (req, res) => {
  try {
    const { pseudo, password } = req.body;

    const player = await Player.findOne({ pseudo });
    if (!player) {
      return res.status(400).json({ error: "Pseudo inconnu" });
    }

    const ok = await bcrypt.compare(password, player.password);
    if (!ok) {
      return res.status(400).json({ error: "Mot de passe incorrect" });
    }

    res.json({
      message: "Connexion OK",
      pseudo: player.pseudo,
      balance: player.balance
    });

  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
