const mongoose = require("mongoose")
const schema = mongoose.Schema
const adminschema = new schema({
    title:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("prod",adminschema)