const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'


const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', function() {
    console.log('Connected!')
})


//App should use the json format
app.use(express.json())

//Defining a router
const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

// Listen to the server after starting
app.listen(9000, () => {
    console.log('Server started')
})