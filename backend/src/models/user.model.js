import mongoose, { Schema } from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
            trim: true,
            minLength: 1,
            maxLength: 30
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 50
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
            trim: true,
            match: [/.+@.+\..+/, "Please enter a valid email address."]
        },

    },
    {
        timestamps: true
    }
)



export const User = mongoose.model("User", userSchema)