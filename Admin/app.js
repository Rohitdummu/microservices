const express = require("express")
const server = express()
const bp=require("body-parser")
const cors = require("cors")
server.use(cors())
server.use(bp.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/micro").then((res)=>console.log("connected to db")).catch((err)=>console.log("failure"))
const AdModel = require("../models/admin")

server.get("/",(req,res)=>{
    res.send({msg:"hello admin"})
})

server.post("/additems",async (req,res)=>{
    try{
        const {title,type,price} = req.body
        const result = await AdModel.create({
            title,
            type,
            price
        })
        res.send({msg:"products added",status:true,response:result}).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed ?",status:false}).status(500)
    }
})


module.exports = server