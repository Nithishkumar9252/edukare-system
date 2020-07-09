const router = require("express").Router();
const User = require("../models/users");
const { registerValidate, loginValidate } = require("../validation");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const authenticate = require("../authenticateJWT");

router.get("/", function (req, res) {
  res.send("Express Router, yayyy!!");
});

//register
router.post("/register", async (req, res) => {
  //validation
  const { error } = registerValidate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check for repeat
  const emailexists = await User.findOne({ email: req.body.email });
  if (emailexists) return res.status(400).send("email already exists");

  //encryption :dab:
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //user creation
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

//login
router.post("/login", async (req, res) => {
  //validation
  const { error } = loginValidate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //check for repeat
  const person = await User.findOne({ email: req.body.email });
  if (!person) return res.status(400).send("Entered email doesent exist");

  //password checkkk
  const validPassword = await bcrypt.compare(
    req.body.password,
    person.password
  );
  if (!validPassword) return res.status(400).send("Invalid password");

  //token with jsonwebtoken
  const user = { _id: person._id };
  const accessToken = authenticate.generateAccessToken(user);
  // const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  res.send({ accessToken: accessToken });
});

module.exports = router;
