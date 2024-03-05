import express from "express";
import 'dotenv/config'
import gameRoutes from "./routes/game-routes.js";

//express server application
const app = express()


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/game-routes', gameRoutes)


app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT, '!!!')
})

process.env