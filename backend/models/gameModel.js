import mongoose from "mongoose";

const Schema = mongoose.Schema

const multiGameSchema = new Schema({
    games: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Game'
        }
    ]
}, { timestamps: true })

const Game = mongoose.model('MultiGame', multiGameSchema)

export default Game