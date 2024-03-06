import express from "express";
import { 
    getPlayers, 
    getOnePlayer, 
    createPlayer 
} from "../controllers/playerController.js";

const router = express.Router()

router.get('/', getPlayers)

router.get('/:id', getOnePlayer)

router.post('/', createPlayer)

router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a player'})
})

router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE a player'})
})

export default router