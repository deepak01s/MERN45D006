// console.log("This is my server page !")

// console.log("We are going to start backend code form today")
// for importing express
const express = require("express");
const app = express();
app.use(express.json());

// http methods - get , post , put , delete
app.get("/api",(req ,res)=>{
    console.log("get request clicked")
    return res.send("This is my first api")
})

app.post("/post",(req ,res)=>{
    const data = req.body;
    console.log("post request clicked",data)
    return res.send("This is my first post ap")
})

app.put("/put",(req ,res)=>{
    console.log("put request clicked")
    return res.send("This is my first put api")
})  

app.delete("/delete",(req ,res)=>{
    console.log("delete request clicked")
    return res.send("This is my first delete api")
})


const port = 8000;
app.listen(port,()=>{
    console.log(`The server is started at port ${port}`)
})
