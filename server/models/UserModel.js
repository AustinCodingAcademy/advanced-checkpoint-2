import mongoose from "mongoose";

const schema = new mongoose.Schema({
 name: {
   required: true,
   type: String
 },
 age: {
   required: true,
   type: Number
 },
 gender: {
   required: false,
   type: String
 },
});

const UserModel = mongoose.model("User", schema);
export default UserModel;
