import mongoose from "mongoose";

const schema = new mongoose.Schema({
    make: {
        required: true,
        type: String
    },
    model: {
        required: true,
        type: String
    },
    year: {
        required: true,
        type: String
    },
    color: {
        required: true,
        type: String
    },
    engine: {
        required: true,
        type: String
    },
});

export default mongoose.model("Cars", schema);