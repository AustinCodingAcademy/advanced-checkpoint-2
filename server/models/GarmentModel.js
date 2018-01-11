import mongoose from "mongoose";
const schema = new mongoose.Schema({
 name: {
   required: true,
   type: String
 },
 description: {
   required: false,
   type: String
 },
 price: {
   required: false,
   type: Number
 },
 category: {
   required: false,
   type: String
 },
 color: {
   required: false,
   type: String
 },
});

const GarmentModel = mongoose.model("Garment", schema);
export default GarmentModel;