const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/api/intern", (req, res) => {
  res.json({
    name: "Fauna Jenith",
    referralCode: "Fauna@2005",
    totalDonations: 25000,
    rewards: ["T-shirt", "Badge", "Certificate"]
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
