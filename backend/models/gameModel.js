import mongoose from "mongoose";

const Schema = mongoose.Schema

const multiGameSchema = new Schema({
    
}, { timestamps: true })

const multiGame = mongoose.model('MultiGame', multiGameSchema)

export default multiGame