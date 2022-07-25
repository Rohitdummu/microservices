const mongoose = require("mongoose")
const schema = mongoose.Schema
const userschema = new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    state:{
        type : String,
        required : true
    },
    city:{
        type : String,
        required : true
    },
    phone :{
        type : Number,
        required : true
    },
    admin:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model("user",userschema)