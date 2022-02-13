const jwt = require("jsonwebtoken");
const asynchandler = require("express-async-handler");

const User = require("../models/userModals");

// Get All Users

const getUser = asynchandler(async (req, res) => {
  const users = await User.find();

  if (!users) {
    res.status(400);
    throw new Error("Inavlid phoneNumber");
  }

  res.status(200).json({ data: users });
});

// Login User
const login = asynchandler(async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const { ph_number } = req.body;

  const loginUser = await User.findOne({ ph_number });

  // Success
  if (loginUser) {
    res.status(201).json({
      user: loginUser,
      token: generateToken(loginUser),
      message: `Successfully Login`,
    });
  } else {
    res.status(400).json({
      message: `Invalid Phone Number or need to Sign Up first`,
    });
  }
});

// Sign Up User
const signUp = asynchandler(async (req, res) => {
  const { ph_number } = req.body;

  if (!ph_number) {
    res.status(400);
    throw new Error("Phone Number field is required");
  }

  // Make Sure User Is Not Exists
  const isUserExist = await User.findOne({ ph_number });

  if (isUserExist) {
    res.status(400);
    throw new Error(`${ph_number} is already exists. You need to Login.`);
  }

  // Add User
  const signUpUser = await User.create({
    ph_number: ph_number,
  });

  if (signUpUser) {
    res.status(201).json({
      user: signUpUser,
      token: generateToken(signUpUser),
      message: `Sign Up successfully!`,
    });
  } else {
    res.status(400).json({
      message: `Invalid Phone Number`,
    });
  }
});

// JWT Token
const generateToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
    expiresIn: "60d",
  });
};

module.exports = {
  login,
  signUp,
  getUser,
};
