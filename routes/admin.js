const express = require("express");
const Player = require("../models/player");

const router = express.Router();

// Ajouter du solde à un joueur
router.post("/credit", async (req, res) => {
  try {
    const { pseudo, amount } = req.body;

    if (!pseudo || !amount) {
      return res.status(400).json({ error: "Pseudo et montant requis" });
    }

    const player = await Player.findOne({ pseudo });

    if (!player) {
      return res.status(404).json({ error: "Joueur introuvable" });
    }

    player.balance += Number(amount);
    await player.save();

    res.json({
      message: "Solde mis à jour",
      pseudo: player.pseudo,
      balance: player.balance
    });

  } catch (err) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

module.exports = router;
