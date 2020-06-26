require("dotenv").config();
const express = require("express");
const app = express();
const body_parser = require("body-parser");
const portNumber = process.env.PORT;

const loginHelper = require("./loginHelper");

const user = "yasaswiraj";
const password = "helloworld";

var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
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
