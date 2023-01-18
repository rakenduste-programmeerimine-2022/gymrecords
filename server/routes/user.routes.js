/*const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { body } = require("express-validator");
const User = require("../models/User.model");

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));

router.post(
  "/log-in",
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  userController.signupUser
);

module.exports = router; */

const express = require('express')
const router = express.Router()
const { registerUser, loginUser, getMe } = require('../controllers/user.controller')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)

module.exports = router