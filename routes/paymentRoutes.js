const express = require('express')
const router = express.Router()
const Razorpay =require('razorpay')
const shortid =require('shortid')

const paymentModel =require('../models/paymentModel')

var razorpay = new Razorpay({
    key_id: 'rzp_test_EcAdh67KBaMQHm',
    key_secret: 'iNMEbE7vcwXCALZJIKhjg4vO',
});
  

router.get('/', async (req, res) => {
    res.status(200).json({message:"Payment Home Page"})
})

router.get('/payment-details/:id', async(req, res) => {
    const { id } = req.params
    try {
        const paymentDetails = await paymentModel.findOne({userId: id})
        res.status(200).json({message:"success" ,data:paymentDetails})
    }
    catch (error) {
        console.log(error)
    }
    

})

router.get('/payment-razorpay', async (req, res) => {
    const payment_capture = 1
    
    const options = {
        amount: 100,
        currency: "INR",
        receipt: shortid.generate(),
        payment_capture
    }
    
    try {
        const response = await razorpay.orders.create(options)
    
        res.status(200).json({ message: "success", paymentOptions: response })
    }
    catch (error) {
        console.log(error)
    }
    
})

router.post('/payment-razorpay', async (req, res) => {
    const newPayment = req.body
    
    try {
        await paymentModel.create(newPayment)
        res.status(200).json({message:"success"})
    }
    catch (error) {
        console.log(error)
    }

})

module.exports =router