import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: string
  },
  age: {
    required: true,
    type: string
  },
  sex: {
    required: true,
    type: string
  },
  job: {
    required: true,
    type: string
  },
  married: {
    required: true,
    type: string
  }
});

export default mongoose.model('User', schema);
