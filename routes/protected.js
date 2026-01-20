const express = require("express");
const auth = require("./middleware/auth");

const router = express.Router();

router.get("/protected", auth, (req, res) => {
  res.json({
    message: "Accès autorisé",
    userId: req.user.id
  });
});

module.exports = router;
