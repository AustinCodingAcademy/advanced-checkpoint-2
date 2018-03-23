import mongoose from "mongoose";

const schema = new mongoose.Schema({
  firstname: {
   required: true,
   type: String
 },
 lastname: {
   required: true,
   type: String
 },
 experience: {
   required: true,
   type: Number
 },
 skills: {
     required: true,
     type: String
 } ,
 linkedin: {
     required: true,
     type: String
 }
});

export default mongoose.model("Application", schema);