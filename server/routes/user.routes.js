const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { body } = require("express-validator");
const User = require("../models/User.model");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

router.post(
  "/sign-up",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  userController.signupUser
);

module.exports = router;
