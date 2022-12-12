const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { body } = require("express-validator");
const User = require("../models/User.model");

router.post(
  "/log-in",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  userController.SignUp
);

module.exports = router;
