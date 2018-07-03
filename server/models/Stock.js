import mongoose from "mongoose";

const schema = new mongoose.Schema({
  _id: {
    required: true,
    type: String
  },
  ticker: {
    required: true,
    type: String,
  },
  companyName: {
    required: true,
    type: String,
  },
  sector: {
    required: false,
    type: String,
  },
  averageCost: {
    type: Number,
  },
  annualDividend: {
    type: Number,
  }
});

export default mongoose.model("Stock", schema);
