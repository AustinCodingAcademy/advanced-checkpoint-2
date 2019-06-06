const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstName: {
    required: true,
    type: String
  },
  lastName: {
    required: true,
    type: String
  },
  birthday: {
    required: true,
    type: String
  },
  phone: {
    required: true,
    type: String
  },
  state: {
    required: true,
    type: String
  },
});

module.exports = mongoose.model("User", schema);