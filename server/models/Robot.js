import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  movie: {
    required: true,
    type: String
  },
  friends: {
    type: String
  },
  enemies: {
    type: String
  },
  movement: {
    type: String
  },
  notes: {
    type: String
  }
});

export default mongoose.model("Robot", schema);