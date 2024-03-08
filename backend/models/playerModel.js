import mongoose from "mongoose";

const Schema = mongoose.Schema

const gameSchema = new Schema({
    eliminations: {
        type: Number,
        required: true
    },
    assists: {
        type: Number,
        required: true
    },
    hits: {
        type: Number,
        required: true
    },
    shots: {
        type: Number,
        required: true
    },
    accuracy: {
        type: Number,
        required: true
    }
}, {timestamps: true})

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
    games: [gameSchema]
}, { timestamps: true })

export default mongoose.model('Player', playerSchema)