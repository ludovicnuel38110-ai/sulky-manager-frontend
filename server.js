const express = require("express");
const cors = require("cors");
require("./config/db");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// ================= ROUTES =================
app.use("/api/auth", require("./routes/auth"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/races", require("./routes/races"));

// Test route
app.get("/", (req, res) => {
  res.send("Sulky Bet API is running");
});

// ================= SERVER =================
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log("✅ Server running on port", PORT);
});
