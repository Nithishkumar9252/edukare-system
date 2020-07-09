require("dotenv").config();
const express = require("express");
const app = express();
const portNumber = process.env.PORT;
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const authenticate = require("./authenticateJWT");
//connection with database
mongoose.connect(
  process.env.MONGOOSE_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to database")
);

const loginHelper = require("./loginHelper");
//routes
const authRoute = require("./routes/auth");

const user = "yasaswiraj";
const password = "helloworld";

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

//middlewares
app.use(allowCrossDomain);
app.use(express.json());

//route middlewares
app.use("/auth", authRoute);

app.get("/bleh", authenticate.authenticateToken, function (req, res) {
  res.send("Express Baby!!");
});

app.post("/login", function (req, res) {
  if (req.body.email === user && req.body.password === password)
    res.send("Hello my boi");
  else {
    return res.status(401).json({ err: error });
  }
});

app.listen(portNumber, () => {
  console.log("server started on port:" + portNumber);
});
