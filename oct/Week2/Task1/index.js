// console.log("Hello World")
// console.log("Hello")

const express=require("express")
const app=express()
app.use(express.json());


// http methods - get , post , put , delete

app.get("/get",(req,res)=>{
console.log("Clicked successfully");
return res.send("this is my get request")
})


app.post("/post",(req,res)=>{
const data = req.body;
console.log("post request Clicked successfully",data);
return res.send("this is my post request")
})

app.put("/put",(req,res)=>{
const data = req.body;
console.log("put request Clicked successfully",data);
return res.send("this is my put request")
})

app.delete("/delete",(req,res)=>{
const data = req.body;
console.log("delete request Clicked successfully",data);
return res.send("this is my delete request")
}) 

// port number
port=9000
app.listen(port,()=>{
    console.log(`This is my server at port ${port}`)
})