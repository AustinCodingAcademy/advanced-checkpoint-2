import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    type: Number
  },
  location: {
    required: true,
    type: String
  },
  item: {
    required: true,
    type: String
  },
  condition: {
    type: String
  },
  price: {
    required: true,
    type: String
  },
  seller: {
    required: true,
    type: String
  },
  deleted: {
    required: false,
    type: Boolean
  }
});

const PostModel = mongoose.model("Post", schema);
export default PostModel;
