const mongoose =require("mongoose");
const connectDB =async()=>{
    try {
    await mongoose.connect(process.env.mongo_Url);
   console.log("connected") 
}
catch(error){
    console.log("not connected")
}}
module.exports=connectDB;
