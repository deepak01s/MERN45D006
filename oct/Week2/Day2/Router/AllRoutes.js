const express=require("express")
const validation = require("../middleware/validationMiddleware")
const authenticate = require("../middleware/authMiddleware")
const router=express.Router()


router.get("/get",validation,authenticate,(req,res)=>{
    console.log("get request called")
    res.send("this is my get request")
})

router.post("/post",(req,res)=>{
    const data = req.body;
    console.log("post request called",data)
    res.send("this is my post request")
})
router.put("/put",(req,res)=>{
    const data = req.body;
    console.log("put request called",data)
    res.send("this is my put request")
})

router.put("/put/:id",(req,res)=>{
    // const data = req.params;
    // console.log("id",id)
    const id = req.query
    console.log("id",a)
    console.log("put request with id called id",id)
    res.send("this is my put request with id")  
})

router.delete("/delete",(req,res)=>{
    const data = req.body;
    console.log("delete request called",data)
    res.send("this is my delete request")
})
module.exports=router