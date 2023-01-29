const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    gender: String,
    dob: Date,
    height: String,
    weight: String,
    complexion: String,
    bodytype: String,
    physicalStatus: String,
    bloodGroup: String,
    mothertongue: String,
    languages: [{
        type:String
    }],
    religion: String,
    caste: String,
    image:String,
    advanceProfileStatus: {
        type: Boolean,
        default:false
    },
    aboutMe: String,
    countryLiving: String,
    currentLocation: String,
    nativePlace: String,
    diet: String,
    smoking: String,
    drinking: String,
    occupation: String,
    annualIncome: String,
    residential:String,
    family: {},
    education: {},
    contact: {},
    accountStatus: {
        type: Boolean,
        default:false
    }
    
    
})

const profileModel = new mongoose.model('profile', profileSchema)

module.exports =profileModel