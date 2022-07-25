const express = require("express")
const server = express()
const bp=require("body-parser")
const cors = require("cors")
server.use(cors())
server.use(bp.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/micro").then((res)=>console.log("connected to db")).catch((err)=>console.log("failure"))
const odModel = require("../models/orders")

server.get("/chekout",(req,res)=>{
res.send({msg:" chekout order services"})
})

// both can work by userid and orderid

server.get("/cart",(req,res)=>{
    res.send({msg:"cart services"})
})

// server.post("/addorder",async (req,res)=>{
//     try{
//         const {userid,prodid,quantity} = req.body
//         const result = await odModel.create({
//             userid,
//             prodid,
//             quantity
//         })
//         res.send({msg:"order added",status:true,response:result}).status(200)
//     }
//     catch(err){
//         console.log(err)
//         res.send({msg:"failed ?",status:false}).status(500)
//     }
// })

module.exports = server