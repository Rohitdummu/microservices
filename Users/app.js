const express = require("express")
const server = express()
const bp=require("body-parser")
const cors = require("cors")
server.use(cors())
server.use(bp.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/micro").then((res)=>console.log("connected to db")).catch((err)=>console.log("failure"))
const uModel = require("../models/users")

server.get("/",(req,res)=>{
res.send({msg:"hello user"})
})

server.post("/register", async (req,res)=>{
    try{
        const {name,email,address,pincode,password,state,city,phone} = req.body
        const result = await uModel.create({
            name,email,address,pincode,password,state,city,phone,admin:false
        })
        res.send({msg:"user added",status:true,response:result}).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed ?",status:false}).status(500)
    }
})

server.post("/login", async (req,res)=>{
    res.send("logged in")
})



module.exports = server