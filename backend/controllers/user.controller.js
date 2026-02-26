
import { User } from "../src/models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const {userName, email, password} = req.body;

        //Validation

        if(!userName || !email || !password){
            return res.status(400).json({message: "ALL fields are required!"})
        }

        // Check existing user

        const existing = await User.findOne({email: email.toLowerCase()})

        if(existing){
            return res.status(400).json({message: "User already exists!"})
        }

        // Create user

        const user = await User.create({
            userName,
            email: email.toLowerCase(),
            password,
            loggedIn: false,
        })

        res.status(201).json({
            message: "User regitered",
            user: {id :user._id, email:user.email, userName: user.userName}
        }
        )

    } catch (error) {
        res.status(500).json({message: "Internal server error", error:error,message})
    }
}

const loginUser = async(req,res) => {
    try {
        // Check user already exist

        const {email, password} = req.body;

        const user = await User.findOne({
            email:email.toLowerCase()
        });

        if(!user) return res.status(400).json({
            message: "User not found"
        });

        //

    } catch (error) {
        
    }
}

export {
    registerUser
}