const authenticate=(req,res,next)=>{
    console.log("Authentication")
    const isAuthentication=true
    if(isAuthentication){
        next()
    }else{
        res.send("user not Authenticated")
    }}
    module.exports=authenticate