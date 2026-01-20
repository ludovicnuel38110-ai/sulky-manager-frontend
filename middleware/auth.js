const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    // 🔐 Récupération du header Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "Accès refusé : token manquant" });
    }

    // Format attendu : "Bearer TOKEN"
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Accès refusé : token invalide" });
    }

    // 🔓 Vérification du token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // On attache l'utilisateur à la requête
    req.user = decoded;

    next();
  } catch (err) {
    console.error("AUTH MIDDLEWARE ERROR:", err);
    return res.status(401).json({ message: "Token invalide ou expiré" });
  }
};
