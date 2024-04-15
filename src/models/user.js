import mongoose from 'mongoose'
import { profilePicGenerator } from '../helpers/index.js'

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        profile: {
            type: String,
            required: true,
            default() {
                return profilePicGenerator(this.email)
            },
            trim: true,
        },
    },
    { timestamps: true }
)

export default mongoose.model('User', userSchema)
