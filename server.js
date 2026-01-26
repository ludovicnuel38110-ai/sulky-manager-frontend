const express = require("express");
const cors = require("cors");
const path = require("path");

// 🔥 Initialise MongoDB (connexion unique)
require("./config/db");

const app = express();

// =====================
// Middleware
// =====================
app.use(cors());
app.use(express.json());

// =====================
// Routes API
// =====================
// Courses hippiques (PMU fictif Sulkyland)
app.use("/api/races", require("./routes/races"));

// =====================
// Frontend (public)
// =====================
app.use(express.static(path.join(__dirname, "public")));

// =====================
// Fallback (SPA)
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
