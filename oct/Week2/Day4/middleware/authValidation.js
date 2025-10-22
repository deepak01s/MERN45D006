const User = require("../model/userModel");
const jwt = require("jsonwebtoken")

const userValidation = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        // const {user_id} = await JsonWebTokenError.decode(token);

        //     const validUser =await User.findOne({_id:user_id});

        // if (!validUser) {
        //     return res.status(404).json({
        //         status:false,
        //         message:"validation failed"
        //     })

        // }else{
        //     next();
        // }

        const decodeUser = await jwt.verify(token, "user_key");

        const validUser = await User.findById(decodeUser.user_id);

        if (!validUser) {
            return res.status(404).json({
                status: false,
                message: "validation failed"
            })

        } else {
            next();
        }


        // console.log("Validation start");
        // res.send("validation successfully")
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({
            status: false,
            message: "something went wrong"
        })
    }
}

// update 

const updateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodeUser = await jwt.verify(token, "user_key");

    const updatedUserid = await User.findByIdAndUpdate(
      decodeUser.user_id,
      req.body,
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        status: false,
        message: "Update process failed",
      });
    }

    req.updatedUserid = updatedUserid;
    next();
  } catch (error) {
    console.log("Update Error:");
    return res.status(500).json({
      status: false,
      message: "Error updating user"
    });
  }
};










module.exports=updateUser;
module.exports = userValidation;

