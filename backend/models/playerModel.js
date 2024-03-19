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
        required: true
    },
    games: [ gameSchema ]
}, { timestamps: true })


const Player = mongoose.model('Player', playerSchema)
const Game = mongoose.model('Game', gameSchema)

export {Player, Game}

// {
//     "playerId": "65ebd5565c094592e20e5c0e",
//     "eliminations": 6,
//     "assists": 4,
//     "hits": 100,
//     "accuracy": 80,
//     "shots": 125
// }