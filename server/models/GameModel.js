import mongoose from "mongoose";

const schema = new mongoose.Schema({
 name: {
   required: true,
   type: String
 },
 players: {
   required: true,
   type: String
 },
 type: {
   required: false,
   type: String
 },
 playtime: {
   required: false,
   type: String
 },
});

const GameModel = mongoose.model("Game",schema);
export default GameModel;
