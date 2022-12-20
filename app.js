const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();

app.use(compression());
app.use("/solarQubeCSS", express.static(path.join(__dirname, "solarQubeCSS")));
console.log(path.join(__dirname, "solarQubeCSS"));


app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/rentSolar", function (req, res) {
  res.sendFile(path.join(__dirname, "rentSolar.html"));
});

app.get("/savingsReport", function (req, res) {
  res.sendFile(path.join(__dirname, "savingReport.html"));
});

app.get("/FAQs", function (req, res) {
  res.sendFile(path.join(__dirname, "FAQs.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});