const express = require("express");
const compression = require("compression");
const path = require("path");
const app = express();

app.use(compression());
// app.use("/carecategory/", express.static(path.join(__dirname, "nutritional")));

// app.use("/", express.static(path.join(__dirname, "digital")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/carecategory/nutritionalcare", function (req, res) {
  res.sendFile(path.join(__dirname, "nutritionalcare.html"));
});
app.get("/carecategory/thankyou", function (req, res) {
  res.sendFile(path.join(__dirname, "thankyou1.html"));
});

app.get("/care-category/digital", function (req, res) {
  res.sendFile(path.join(__dirname, "digital.html"));
});
app.get("/care-category/digital-literacy", function (req, res) {
  res.sendFile(path.join(__dirname, "digital-literacy.html"));
});
app.get("/care-category/thankyou", function (req, res) {
  res.sendFile(path.join(__dirname, "thankyou2.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});