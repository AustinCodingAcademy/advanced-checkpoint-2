const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 questionid: {
    required: true,
    type: String
  },
 name: {
   required: true,
   type: String
 },
 length: {
   required: true,
   type: String
 },
 subject: {
   required: false,
   type: String
 },
 difficulty: {
    required: true,
    type: String
  },
});

module.exports  = mongoose.model("Question", schema);