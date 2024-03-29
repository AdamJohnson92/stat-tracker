import express from "express";
import 'dotenv/config'
import playerRoutes from "./routes/player-routes.js";
import mongoose, { mongo } from "mongoose";

//express server application
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/player-routes', playerRoutes)

// connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Connected to the database, and listening on port', process.env.PORT, '!!!')
        })
    })
    .catch((error) => console.log(error))
