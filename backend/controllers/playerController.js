import {Player, Game} from "../models/playerModel.js";
// import Game from "../models/gameModel.js"
import mongoose from "mongoose";

//get all players
const getPlayers = async (req, res) => {
    const players = await Player.find({}).sort({ createdAt: -1 })

    res.status(200).json(players)
}

//get one player

const getOnePlayer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No player found with that id.' })
    }

    const player = await Player.findById(id)

    if (!player) {
        return res.status(404).json({ error: 'That player doesn\'t exist.' })
    }

    res.status(200).json(player)
}

//create new player
const createPlayer = async (req, res) => {
    const { name, gamerTag, avatar, games } = req.body

    try {
        const player = await Player.create({ name, gamerTag, avatar, games })
        res.status(200).json(player)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//delete a player

const deletePlayer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No player found with that id.' })
    }

    const player = await Player.findOneAndDelete({ _id: id })
    if (!player) {
        return res.status(404).json({ error: 'That player doesn\'t exist.' })
    }
    res.status(200).json(player)

}

//update a player

const updatePlayer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No player found with that id.' })
    }

    const player = await Player.findOneAndUpdate(
        { _id: id },
        { $addToSet: { responses: req.body } },
        { runValidators: true, new: true }
    )

    if (!player) {
        return res.status(404).json({ error: 'That player doesn\'t exist.' })
    }

    res.status(200).json(player)

}

const createGame = async (req, res) => {
    try {
        const game = await Game.create(req.body)
        const player = await Player.findOneAndUpdate(
            { _id: req.body.playerId },
            {
                $addToSet: {
                    games: {
                        // _id: game._id, 
                        eliminations: game.eliminations,
                        assists: game.assists,
                        hits: game.hits,
                        accuracy: game.accuracy,
                        shots: game.shots
                    }
                }
            },
            { new: true })
        res.status(200).json(game)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export {
    getPlayers,
    getOnePlayer,
    createPlayer,
    deletePlayer,
    updatePlayer,
    createGame
}

// {
//     "eliminations": 5,
//     "assists": 4,
//     "hits": 100,
//     "accuracy": 80

// }