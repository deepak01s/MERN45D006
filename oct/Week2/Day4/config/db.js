const mongoose =require("mongoose");
const connectDB =async()=>{
    try {
    await mongoose.connect(process.env.mongo_URL);
   console.log("connected to the Database") 
}
catch(error){
    console.log("not connected to the database")
}}
module.exports=connectDB;
