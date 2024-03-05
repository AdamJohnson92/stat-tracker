import express from "express";

const router = express.Router()

router.get('/', (req, res)=> {
    res.json({message: 'Get Route, hello!'})
})

export default router