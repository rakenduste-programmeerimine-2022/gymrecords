const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
  },
  { timestamps: true }
);

userSchema.statics.signup = async function (
  firstname,
  lastname,
  email,
  password
) {
  //validation using validator
  if (!email || !password) {
    throw Error("All fields must be filled.");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("password is not strong enough");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("This email is already exist ");
  }
  //generating salt for extra security of password and hashing password
  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hash(password, salt);
  //now storing hash password and  the email that the user  enter, in the databases and return the user
  const user = await this.create({ email, password: hash });
  return user;
};

const User = model("User", userSchema);

module.exports = User;
