const express = require("express");
const compression = require("compression");
const path = require("path");
const User = require("./config");
const savingsReport = require("./config")
const alert = require("alert");
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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
  res.sendFile(path.join(__dirname, "savingsReport.html"));
});

app.get("/sR1", function (req, res) {
  res.sendFile(path.join(__dirname, "sR1.html"));
});

app.get("/FAQs", function (req, res) {
  res.sendFile(path.join(__dirname, "FAQs.html"));
});

app.post("/", async (req, res) => {
  const userJSON = {
    name: req.body.username,
    contactNumber: req.body.phone,
    email: req.body.email,
    message: req.body.msg
  };
  await User.add(userJSON);
  res.redirect("/")
  alert("Your response has been successfully recorded");
})


app.post("/savingsReport", async (req, res) => {
  const reportsJSON = {
    pincode: req.body.sRPincode,
    connection: req.body.sRConnection,
    bill: req.body.sRBill,
    number: req.body.sRPhNumber,
    email: req.body.sREmail
  };
  await savingsReport.add(reportsJSON);
  res.redirect("/");
  alert("Your response has been successfully recorded, You will receive your report soon");
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});