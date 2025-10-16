const authorization = (req,res,next)=>{
    console.log("Authorization Middleware called....... ");
    const isAuthentication = true;
    if (isAuthentication) {
        console.log("Congratulation Authorization is successfull")
        next()
    } else {
        res.send("User is not Authorized");
    }
}

module.exports= authorization;



































// const authenticate=(req,res,next)=>{
//     console.log("Authentication")
//     const isAuthentication=true
//     if(isAuthentication){
//         next()
//     }else{
//         res.send("user not Authenticated")
//     }}
//     module.exports=authenticate