import express from "express";
import { 
    getPlayers, 
    getOnePlayer, 
    createPlayer,
    deletePlayer,
    updatePlayer, 
} from "../controllers/playerController.js";

const router = express.Router()

router.get('/', getPlayers)

router.get('/:id', getOnePlayer)

router.post('/', createPlayer)

router.delete('/:id', deletePlayer)

router.patch('/:id', updatePlayer)


export default router