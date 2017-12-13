import mongoose from "mongoose";

const schema = new mongoose.Schema({
  eye: {
    required: true,
    type: String
  },
  color: {
    required: true,
    type: String
  },
  age: {
    required: true,
    type: Number
  },
  type: {
    required: true,
    type: String
  },
  yoga: {
    required: true,
    type: Boolean
  }
});

export default mongoose.model("Goat", schema);
