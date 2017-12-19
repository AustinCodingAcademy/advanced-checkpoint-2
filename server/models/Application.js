import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
   required: true,
   type: String
 },
 dob: {
   required: true,
   type: Date
 },
 experience: {
   required: true,
   type: Number
 },
 university: {
     required: true,
     type: String
 } ,
 location: {
     required: true,
     type: String
 }
});

export default mongoose.model("Application", schema);