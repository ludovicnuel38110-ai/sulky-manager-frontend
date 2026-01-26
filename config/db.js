const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connecté");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB error:", err);
});

module.exports = mongoose;
