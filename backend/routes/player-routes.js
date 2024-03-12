import express from "express";
import { 
    getPlayers, 
    getOnePlayer, 
    createPlayer,
    deletePlayer,
    updatePlayer,
    createGame, 
} from "../controllers/playerController.js";

const router = express.Router()

router.get('/', getPlayers)

router.get('/:id', getOnePlayer)

router.post('/', createPlayer)

router.delete('/:id', deletePlayer)

router.patch('/:id', updatePlayer)

router.post('/:id/games', createGame)


export default router