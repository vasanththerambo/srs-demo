const express = require('express')
const router = express.Router()

const profileModel =require('../models/profileModel')
const interestModel =require('../models/intesestModel')

router.get('/', async (req, res) => {
    try {
         res.status(200).json({message:"API home page"})
    }
    catch (error) {
        console.log(error)
    }
   
})

// profile

router.get('/profiles', async (req, res) => {
    try {
        const profiles = await profileModel.find()
        res.status(200).json({message:"success" ,data:profiles})
    }
    catch (error) {
        console.log(error)
    }
    
})

router.post('/profiles', async(req, res) => {
    const newProfile = req.body
    
    const email = newProfile.email
    
    try {
        const existingProfile = await profileModel.findOne({ email })
        
        if (existingProfile) {
            res.status(409).json({message:"profile exists"})
        }
        else {
            await profileModel.create(newProfile)
            res.status(200).json({message:"success" ,data:newProfile})
        }
    }
    catch (error) {
        console.log(error)
    }
    


})

router.get('/profiles/:id', async(req, res) => {
    const { id } = req.params
    try {
        const profile = await profileModel.findById(id)
        
        res.status(200).json({message:"success" ,data:profile} )
    }
    catch (error) {
        console.log(error)
    }
})


router.patch('/profiles/:id', async (req, res) => {
    const { id } = req.params
    const updatedProfile = req.body
    
    try {
        await profileModel.findByIdAndUpdate(id, updatedProfile)
        res.status(200).json({message:"success"})
    }
    catch (error) {
        console.log(error)
    }

})

router.delete('/profiles/:id', async (req, res) => {
    const { id } = req.params
    try {
        await profileModel.findByIdAndDelete(id)
        res.status(200).json({message:"success"})
    }
    catch (error) {
        console.log(error)
    }
})

// interest

router.get('/interests', async (req, res) => {
    try {
        const interests = await interestModel.find();
        res.status(200).json({message:"success", data:interests})
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/interests', async (req, res) => {
    const newInterest = req.body
    try {
        await interestModel.create(newInterest)
        res.status(200).json({message:"success"})
    }
    catch (error) {
        console.log(error)
    }
})

router.get('/interests/:id', async (req, res) => {
    const { id } = req.params
    
    try {
        const interest = await interestModel.findById(id)
        res.status(200).json({message:"success",data:interest})
    }
    catch (error) {
        console.log(error)
    }
})

router.patch('/interests/:id', async (req, res) => {
    
    const { id } = req.params
    const updatedInterest = req.body
    
    try {
        await interestModel.findByIdAndUpdate(id, updatedInterest)
        res.status(200).json({message:"success"})
    }

    catch (error) {
        console.log(error)
    }

})

router.delete('/interests/:id', async (req, res) => {
    const { id } = req.params
    console.log(id);
    try {
        await interestModel.findByIdAndDelete(id)
        res.status(200).json({message:"success"})
    }
    catch (error) {
        console.log(error)
    }
})

module.exports = router
