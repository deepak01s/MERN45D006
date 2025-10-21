const express = require("express");
const connect= require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const allRoutes =require("./Routes/AllRoutes")
dotenv.config();
const app = express();
app.use(express.json());
connectDB();

// app.get("/get",(req,res)=>{
//     console.log("get request called")
//     res.send("this is my get request")
// })


app.listen(6700,()=>{
    console.log("My server is running .....")
})
