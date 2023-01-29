const mongoose = require('mongoose')

const interestSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    status:String
})

const interestModel = new mongoose.model('interest', interestSchema)

module.exports =interestModel