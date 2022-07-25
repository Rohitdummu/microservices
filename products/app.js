const express = require("express")
const server = express()
const bp=require("body-parser")
const cors = require("cors")
server.use(cors())
server.use(bp.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/micro").then((res)=>console.log("connected to db")).catch((err)=>console.log("failure"))

server.get("/", async (req,res)=>{
    try{
        const result = await AdModel.find({})
        res.send({msg:"fetching products ",status:true,response:result}).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed ?",status:false}).status(500)
    }
})
server.get("/:type", async (req,res)=>{
    const data = req.params.type
    try{
        const result = await AdModel.find({type:data})
        res.send({msg:"fetching products ",status:true,response:result}).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed ?",status:false}).status(500)
    }
})