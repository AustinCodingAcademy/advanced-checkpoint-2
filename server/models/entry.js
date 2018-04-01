import mongoose from "mongoose";

const schema = {
    id: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: Date
    },
    title: {
        required: true,
        type: String
    },
    body: {
        required: true,
        type: String
    }, 
    type: {
        required: true,
        type: String
    }
}

export default mongoose.model("Entry", schema);