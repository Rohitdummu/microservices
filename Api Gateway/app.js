const express=require("express")
const app=express()
const {createProxyMiddleware}=require("http-proxy-middleware")
const { ticketservice_URL, paymentservice_URL } = require("./config")
const config=require("./config")

app.use("/admin",createProxyMiddleware(
    {
        target:config.adminService_URL,
        pathRewrite:{
            '^/admin':'/'
        },
        changeOrigin:true
    }
))

app.use("/me",createProxyMiddleware({
    target:config.userService_URL,
    pathRewrite:{
        '^/me':'/'
    },
    changeOrigin:true
}))
app.use("/ticket",createProxyMiddleware({
    target:ticketservice_URL,
    pathRewrite:{
        '^/ticket':'/'
    },
    changeOrigin:true
}))
app.use("/payment",createProxyMiddleware({
    target:paymentservice_URL,
    pathRewrite:{
        '^/payment':'/'
    },
    changeOrigin:true
}))

module.exports=app