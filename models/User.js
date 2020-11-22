const mongoose = require("mongoose");

const User = mongoose.model(
  "C_Users",
  new mongoose.Schema({
    RoleId: {
      type: Number,
      default:0
    },
    Username: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    AccessToken: {
      type: String,
    },
  })
);

module.exports = User;
