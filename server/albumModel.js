import mongoose from "mongoose";

const schema = new mongoose.Schema({
 title: {
   required: false,
   type: String
 },
 artist: {
   required: false,
   type: String
 },
 release: {
   required: false,
   type: String
 },
 price: {
     required: false,
     type: String
 },
});

export default mongoose.model("album", schema);
