const express = require("express");
const { Register, login, updateUser, deleteUser, getAllUsers } = require("../controller/userController");
const userValidation = require("../middleware/authValidation");


const router = express.Router();

router.post("/register",Register);
router.post("/login",login);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
router.get("/",userValidation,getAllUsers);


module.exports=router;