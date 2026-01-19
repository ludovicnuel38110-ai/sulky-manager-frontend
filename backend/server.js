require("dotenv").config(); // ⭐ OBLIGATOIRE

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const authRoutes = require("./routes/auth");
const playerRoutes = require("./routes/player");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes API
app.use("/api/auth", authRoutes);
app.use("/api/player", playerRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Sulky Manager OK");
});

// 🔍 DEBUG Render
console.log("🔍 MONGO_URI =", process.env.MONGO_URI);

// MongoDB Atlas (Render)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Port Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur le port ${PORT}`);
});
