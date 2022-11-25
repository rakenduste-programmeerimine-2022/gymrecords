const User = require("../models/User.model");
const { body } = require("express-validator");

exports.SignUp = async (req, res) => {
  User.signup(req.body)
    .then((data) => res.send(`Seems to be done ${data}`))
    .catch((err) => res.send(`Failed successfully ${err}`));
};

exports.protected = async (req, res) => {};
