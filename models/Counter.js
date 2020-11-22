const mongoose = require("mongoose");

const Counter = mongoose.model(
  "C_Counter",
  new mongoose.Schema({
    Count: {
      type: Number,
      required: true,
      default: 2,
    },
    Name: {
      type: String,
      required: true,
      unique: true,
    },
  })
);

module.exports = Counter;
