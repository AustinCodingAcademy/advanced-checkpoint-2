const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  id: {
    require: false,
    type: Number,
  },
  first_name: {
    required: false,
    type: String
  },
  last_name: {
    require: false,
    type: String
  },
  email: {
    require: false,
    type: String
  },
  gender: {
    require: false,
    type: String
  },
  ip_address: {
    require: false,
    type: String
  }
});

module.exports = mongoose.model("User", schema);
