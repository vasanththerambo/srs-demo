const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    userId: String,
    paymentId: String,
    orderId: String,
    paymentDate:Date
})

const paymentModel = new mongoose.model('payment', paymentSchema)

module.exports = paymentModel

