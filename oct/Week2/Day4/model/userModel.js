const mongoose=require("mongoose");
const userSchema =new mongoose.Schema({
    fullName:{
        type:String,
        required : true
    },
    age:{
        type:Number,
        default:0

    },
    email:{
        type:String,
        required:true,
        unique :true
    },
    password:{
        type:String
    }
},
    {
        versionKey:false,
        timestamps:true
    }
)
const User = mongoose.model("user", userSchema);
module.exports=User;