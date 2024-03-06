import express from "express";
import Player from "../models/playerModel.js";

const router = express.Router()

router.get('/', (req, res)=> {
    res.json({message: 'GET All players'})
})

router.get('/:id', (req, res) => {
    res.json({message: 'GET a single player'})
})

router.post('/', async (req, res) => {
    const {name, gamerTag, avatarSrc, games} = req.body

    try {
        const player = await Player.create({name, gamerTag, avatarSrc, games})
        res.status(200).json(player)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a player'})
})

router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE a player'})
})

export default router