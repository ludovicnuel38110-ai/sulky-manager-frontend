const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

// =====================
// MongoDB connexion
// =====================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((err) => {
    console.error("❌ Erreur MongoDB :", err);
    process.exit(1);
  });

// =====================
// Middleware
// =====================
app.use(cors());
app.use(express.json());

// =====================
// Routes API
// =====================
app.use("/api/auth", require("./routes/auth"));

// =====================
// Frontend (public)
// =====================
app.use(express.static(path.join(__dirname, "public")));

// =====================
// Fallback pages
// =====================
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// =====================
// Port Render
// =====================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✅ Server running on port", PORT);
});
