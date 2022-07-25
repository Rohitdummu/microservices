const mongoose = require("mongoose")
const schema = mongoose.Schema
const cartschema = new schema({
    userid: {
        type : mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    // title : {
    //     type : String,
    //     required : true
    //  },
    productid:{
        type : mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    productimage :{
        type : String,
        required : true
    },
    quantity:{
        type : Number,
        required : true
    } 
})

module.exports = mongoose.model("cart",cartschema)