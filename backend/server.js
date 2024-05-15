const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("News Tranding");
});

app.use("/api", require("./Routes/NewsRouter"));

app.listen(PORT, () => {
  console.log(`server is ready on port ${PORT}`);
});
