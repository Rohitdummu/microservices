const express=require("express")
const app=express()
const {createProxyMiddleware}=require("http-proxy-middleware")
const {paymentservice_URL, orderservices_URL, productservices_URL } = require("./config")
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

app.use("/payment",createProxyMiddleware({
    target:paymentservice_URL,
    pathRewrite:{
        '^/payment':'/'
    },
    changeOrigin:true
}))

app.use("/orders",createProxyMiddleware({
    target:orderservices_URL,
    pathRewrite:{
        '^/orders':'/'
    },
    changeOrigin:true
}))

app.use("/products",createProxyMiddleware({
    target:productservices_URL,
    pathRewrite:{
        '^/products':'/'
    },
    changeOrigin:true
}))

module.exports=app