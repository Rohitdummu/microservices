const express = require("express")
const server = express()
const bp=require("body-parser")
const cors = require("cors")
server.use(cors())
server.use(bp.json())
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/micro").then((res)=>console.log("connected to db")).catch((err)=>console.log("failure"))
const AdModel = require("../models/users")
const pdModel = require("../models/products")

server.get("/",(req,res)=>{
    res.send({msg:"hello admin"})
})

server.post("/additems",async (req,res)=>{
    try{
        const {title,productimage,price,quantity,instock,type} = req.body
        const result = await pdModel.create({
            title,productimage,price,quantity,instock,type
        })
        res.send({msg:"products added",status:true,response:result}).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed ?",status:false}).status(500)
    }
})

server.post("/adduser",async (req,res)=>{
    const sp = req.body
    if(sp.password)
    {
        try{
            const {name,email,address,pincode,password,state,city,phone} = req.body
            const result = await AdModel.create({
                name,email,address,pincode,password,state,city,phone,admin:true
            })
            res.send({msg:"user added",status:true,response:result}).status(200)
        }
        catch(err){
            console.log(err)
            res.send({msg:"failed ?",status:false}).status(500)
        }
    }
    else{
        res.send({msg:"failed invalid registration ?",status:false}).status(500)
    }
})

server.post("/removeitems",async (req,res)=>{

    const {_id} = req.body  // product id
    try{
        const result = await pdModel.findByIdAndDelete({_id})
        res.send({msg:"product Deleted ",status:true,response:result}).status(200)
    }
    catch(err){
        console.log(err)
        res.send({msg:"failed ?",status:false}).status(500)
    }
})

server.post("/removeuser",async (req,res)=>{

    const {_id} = req.body  // user id
    try{
        const result = await AdModel.findByIdAndDelete({_id})
        res.send({msg:"user Deleted ",status:true,response:result}).status(200)
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