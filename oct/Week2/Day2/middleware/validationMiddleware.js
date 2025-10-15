const validation=(req,res,next)=>{
    console.log("Validation")
    const isValidation=true
    if(isValidation){
        next()
    }else{
        res.send("user not validated")
    }}
    module.exports=validation