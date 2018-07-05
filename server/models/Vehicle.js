const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  year: {
    required: true,
    type: String
  },
  make: {
    required: true,
    type: String
  },
  model: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: String
  },
  color: {
    required: false,
    type: String
  },
  miles: {
    required: false,
    type: Number
  },
  fuel: {
    required: false,
    type: String
  }
});

module.exports = mongoose.model("Vehicle", schema);
