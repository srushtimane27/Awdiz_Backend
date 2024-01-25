import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    number: Number,
    favFruits: [String]
})

export default mongoose.model('User', userSchema)