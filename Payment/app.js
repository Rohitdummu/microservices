const express = require("express")
const server = express()

server.get("/",(req,res)=>{
res.send({msg:"payment gateway"})
})

module.exports = server