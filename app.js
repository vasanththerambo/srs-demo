const express = require("express")
const app = express();
const mongoose=require('mongoose')
const bodyParser =require('body-parser')
const cors =require('cors')
require("dotenv").config()

const hostname = '0.0.0.0';

const authRouter = require('./routes/authRoutes')
const apiRouter = require('./routes/apiRoutes')
const paymentRoutes =require('./routes/paymentRoutes')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/auth', authRouter)
app.use('/api',apiRouter)
app.use('/payment' , paymentRoutes)

const PORT = process.env.PORT


app.get('/', (req, res) => {
    res.send(`<h1> Server Home Page </h1>`)
})

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://srsmatrimony-demo:srsmatrimony-demo@cluster0.ooxic0s.mongodb.net/srsmatrimony-demodb?retryWrites=true&w=majority", () => {
    console.log("database connected successfully")
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT} `)
})
