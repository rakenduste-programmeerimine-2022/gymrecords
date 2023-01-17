const User = require("../models/User.model");
const { body } = require("express-validator");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email,password)
  try {
    const user = await User.signup(email, password);

    //create token
    const token = createToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { signupUser };
