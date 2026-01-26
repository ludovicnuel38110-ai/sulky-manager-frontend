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
// Port Render
// =====================
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("✅ Server running on port", PORT);
});
