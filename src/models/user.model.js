const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    deafult: "https://icon-library.com/icon/anonymous-avatar-icon-25.html",
  },
  isAdmin: {
    type: Boolean,
    required: true,
    deafult: false,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
  },
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
