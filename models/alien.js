const mongoose = require('mongoose')
    //Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node. js
const alienSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        tech: {
            type: String,
            required: true
        },
        sub: {
            type: Boolean,
            required: true,
            default: false
        }
    })
    //Exporting aleinschema as Alien model
module.exports = mongoose.model('Alien', alienSchema)