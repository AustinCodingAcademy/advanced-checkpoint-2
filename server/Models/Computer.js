import mongoose from "mongoose";

const schema = new mongoose.Schema({
 brand: {
   required: true,
   type: String
 },
 memory: {
   required: true,
   type: String
 },
 color: {
   required: true,
   type: String
 },
 mouse: {
   required: true,
   type: String
 },
 keyboard: {
   required: true,
   type: String
 }
});

export default mongoose.model("Computers", schema);