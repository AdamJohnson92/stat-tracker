import express from "express";

const router = express.Router()

router.get('/', (req, res)=> {
    res.json({message: 'GET All players'})
})

router.get('/:id', (req, res) => {
    res.json({message: 'GET a single player'})
})

router.post('/', (req, res) => {
    res.json({message: 'POST a new player'})
})

router.delete('/:id', (req, res) => {
    res.json({message: 'DELETE a player'})
})

router.patch('/:id', (req, res) => {
    res.json({message: 'UPDATE a player'})
})

export default router