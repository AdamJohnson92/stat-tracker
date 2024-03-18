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
    accuracy: {
        type: Number,
        required: true
    },
    shots: {
        type: Number,
        required: true
    }
}, { timestamps: true })

const Game = mongoose.model('Game', gameSchema)

export default Game