import express from "express";
import 'dotenv/config'

//express server application
const app = express()


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})


app.listen(process.env.PORT, () => {
    console.log('listening on port',process.env.PORT, '!!!')
})

process.env