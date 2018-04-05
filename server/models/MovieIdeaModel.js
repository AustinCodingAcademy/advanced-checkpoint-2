import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    required:true,
    type: String
  },
  genre: {
    required:true,
    type: String
  },
  logline: {
    required:true,
    type: String
  },
  budget: {
    required:true,
    type: String
  },
  notes: {
    required:true,
    type: String
  }
});

const MovieIdeaModel = mongoose.model("MovieIdea", schema);
export default MovieIdeaModel;
