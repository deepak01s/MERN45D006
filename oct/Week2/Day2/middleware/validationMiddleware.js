const validation = (req,res,next)=>{
    console.log("Validation Middleware Called..... ")
    const isValidation = true
    if (isValidation) {
        console.log("Congratulation Validation successful");
        next()
    } else {
        res.send("User is not valid")
    }
}

module.exports = validation;




// const validation=(req,res,next)=>{
//     console.log("Validation")
//     const isValidation=true
//     if(isValidation){
//         next()
//     }else{
//         res.send("user not validated")
//     }}
//     module.exports=validation



