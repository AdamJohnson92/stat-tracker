import express from "express";
import 'dotenv/config'
import playerRoutes from "./routes/player-routes.js";

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


app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT, '!!!')
})

process.env