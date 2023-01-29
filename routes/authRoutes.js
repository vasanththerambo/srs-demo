const express = require('express')
const router = express.Router()

const userModel =require('../models/userModel')

router.get('/', async (req, res) => {
    try {
        res.status(200).json({message:"auth routes : home page"})    
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/register', async(req,res) => {
    const { email, password } = req.body
    
    try {
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            res.status(409).json({message:"user exists"})
        }
        else {
            await userModel.create({email,password})
            res.status(200).json({message:"success"})
        }
    }
    catch (error) {
        console.log(error)
    }
    
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    const existingUser = await userModel.findOne({ email })
    
    if (existingUser) {
        if (password === existingUser.password) {
            res.status(200).json({message: "success" , data:{user:{_id:existingUser._id,email},token:"yyyy"}})
        }
        else {
            res.status(401).json({message:"unauthorized"})
        }
    }
    else {
        res.status(404).json({message:"user not found"})
    }
})

module.exports =router