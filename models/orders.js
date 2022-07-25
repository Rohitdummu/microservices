const mongoose = require("mongoose")
const schema = mongoose.Schema
const orderschema = new schema({
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
    // imagename :{
    //     type : String,
    //     required : true
    // },
    price:{
        type : Number,
        required : true
    },
    productimage :{
        type : String,
        required : true
    },
    address :{
        type:String,
        required : true
    },
    quantity:{
        type : Number,
        required : true
    }  
})

module.exports = mongoose.model("order",orderschema)