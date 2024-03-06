import Player from "../models/playerModel.js";
import mongoose from "mongoose";

//get all players
const getPlayers = async (req, res) => {
    const players = await Player.find({}).sort({createdAt: -1})

    res.status(200).json(players)
}

//get one player

const getOnePlayer = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No player found with that id.'})
    }

    const player = await Player.findById(id)

    if (!player) {
        return res.status(404).json({error: 'No player exists.'})
    }

    res.status(200).json(player)
}

//create new player
const createPlayer = async (req, res) => {
    const {name, gamerTag, avatarSrc, games} = req.body

    try {
        const player = await Player.create({name, gamerTag, avatarSrc, games})
        res.status(200).json(player)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a player

//update a player

export {
    getPlayers,
    getOnePlayer,
    createPlayer,
}