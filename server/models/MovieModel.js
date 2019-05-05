import mongoose from "mongoose";

const schema = new mongoose.Schema({
 name: {
   required: true,
   type: String
 },
 actor: {
   required: true,
   type: String
 },
 year: {
   required: true,
   type: String
 },
 awards: {
   required: true,
   type: String
 },
 runtime: {
   required: true,
   type: String
}
});

export default mongoose.model("movie", schema);
