const express = require("express");
const cors = require("cors");
const path = require("path");

// 🔥 Connexion MongoDB (une seule fois)
require("./config/db");

const app = express();

// =====================
// Middleware
// =====================
app.use(cors());
app.use(express.json());

// =====================
// API Routes
// =====================

// Courses (PMU Sulkyland)
app.use("/api/races", require("./routes/races"));

// Authentification joueurs (register / login)
app.use("/api/auth", require("./routes/auth"));

// Admin (créditer des joueurs)
app.use("/api/admin", require("./routes/admin"));

// =====================
// Servir le frontend
// =====================
app.use(express.static(path.join(__dirname, "frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// =====================
// Lancement serveur
// =====================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("✅ Server running on port", PORT);
});
