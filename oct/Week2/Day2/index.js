// console.log("This is backend part")

const express=require("express")
const app=express()
const allRoutes = require("./Router/AllRoutes")

app.use(express.json());
app.use("/main",allRoutes)

// app.get("/get",(req,res)=>{
//     console.log("get request called")
//     res.send("this is my get request")
// })

// app.post("/post",(req,res)=>{
//     const data = req.body;
//     console.log("post request called",data)
//     res.send("this is my post request")
// })

// app.put("/put",(req,res)=>{
//     const data = req.body;
//     console.log("put request called",data)
//     res.send("this is my put request")
// })

// app.put("/put/:id",(req,res)=>{
//     // const data = req.params;
//     // console.log("id",id)
//     const id = req.query
//     console.log("id",a)
//     console.log("put request with id called id",id)
//     res.send("this is my put request with id")  
// })

// app.delete("/delete",(req,res)=>{
//     const data = req.body;
//     console.log("delete request called",data)
//     res.send("this is my delete request")
// })

app.listen(6700,()=>{
    console.log(`This is my server at port 6700`)
})