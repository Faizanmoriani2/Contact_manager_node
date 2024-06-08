const asyncHandler= require('express-async-handler')
const User = require('../models/userModel')
const bcrypt = require("bcrypt")

//@desc Register a User
//@route POST /api/users/register
//@access Public
const registerUser = asyncHandler(async (req, res)=>{
    const {username, email, password} = req.body

    if(!username || !email || !password){
        res.status(400)
        throw new Error("All fields are mandatory!")
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error ("User already registered") 
    }

    //Hash Password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("hashed Password: ", hashedPassword)
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })

    console.log("User Created ", user)

    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400)
        throw new Error ("User data not valid")
    }

    res.json({
        message: "register User"
    })
})

//@desc login a User
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res)=>{
    res.json({message: "login user"})
})

//@desc current User
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res)=>{
    res.json({message: "current user info"})
})

module.exports = { registerUser, loginUser, currentUser}