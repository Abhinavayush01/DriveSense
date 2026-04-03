const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ TEST ROUTE (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("🚀 Backend is working perfectly!");
});

// TEST API
app.get("/test", (req, res) => {
  res.json({ message: "API working" });
});

app.listen(5000, () => {
  console.log("✅ Server running on http://localhost:5000");
});
app.listen(3000, () => {
  console.log("Server running on 3000");
});