import mongoose from "mongoose";

const schema = new mongoose.Schema({
  body: {
    required:true,
    type: String
  },
  genre: {
    required:true,
    type: String
  }
});

const MovieIdeaModel = mongoose.model("MovieIdea", schema);
export default MovieIdeaModel;
