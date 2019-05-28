import mongoose from "mongoose";

const schema = new mongoose.Schema({
 model: {
   required: true,
   type: String
 },
 memory: {
   required: true,
   type: Number
 }
});

export default mongoose.model("IpadModel", schema);
