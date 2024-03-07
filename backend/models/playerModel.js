import mongoose from "mongoose";

const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    gamerTag: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    games: []
}, { timestamps: true })

export default mongoose.model('Player', playerSchema)