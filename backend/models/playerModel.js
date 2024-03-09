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
    games: [gameSchema]
}, { timestamps: true })

const gameData = [
    {
        eliminations: 5,
        assists: 2,
        hits: 60,
        shots: 200,
        accuracy: 30
    }, {
        eliminations: 6,
        assists: 3,
        hits: 60,
        shots: 200,
        accuracy: 30
    }
]

const Player = mongoose.model('Player', playerSchema)


// Player
//     .create({name: 'Tav', gamerTag:'TavGames', avatar:'defaultImg', games: gameData})
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

export default Player