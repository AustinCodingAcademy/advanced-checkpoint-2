const mongoose = require('mongoose');

const schema = new mongoose.Schema({
 courseid: {
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
   required: true,
   type: String
 },
 teacher: {
    required: true,
    type: String
  },
});

module.exports  = mongoose.model("Course", schema);