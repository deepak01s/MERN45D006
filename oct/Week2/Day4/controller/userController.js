const User = require("../model/userModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// For Resister

exports.Register = async (req, res) => {
    try {
        const { fullName, age, email, password } = req.body;
        if (!fullName || !age || !email || !password) {
            return res.status(500).json({
                status: false,
                message: "fill all field"
            })
        }


        const existingUser = await User.findOne({ email }).select("-password");

        if (existingUser) {
            return res.status(500).json({
                status: false,
                message: ("Email already exist")
            })
        }

        bcrypt.hash(password, 10, async (err, hash) => {

            if (err) {
                return res.status(500).json({
                    status: false,
                    message: "password can not change to hash"
                })
            }
            const saveUser = new User({
                fullName,
                age,
                email,
                password: hash
            });
            // Store hash in your password DB.
            await saveUser.save();
        });
        res.status(201).json({
            status: 201,
            message: "Successfully data saved"
        })

        res.send("Complete");
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            status: false,
            message: "something gone wrong"
        })
        // res.send("something wrong")
    }
}

//Login user

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(500).json({
                status: false,
                message: ("fill all the field")
            })
        }

        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(500).json({
                status: false,
                message: ("Invalid email")
            })
        }
        bcrypt.compare(password, existingUser.password, function (err, result) {
            if (result) {



              const token=  jwt.sign({ existingUser}, 'user_key', { expiresIn: '1h' });
              if (!token) {
            res.status(404).json({
                status: false,
                message: "something went wrong"
            })
        } else {
            res.status(201).json({
                status: true,
                message: "login successfully",
                existingUser,
                token
            })
        }
            } else {
                return res.status(500).json({
                    status: false,
                    message: ("Invalid password")
                })
            }
        })

    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            status: false,
            message: "something gone wrong"
        })
    }
}

//update user

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(500).json({
                status: false,
                message: ("id must be required")
            })
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true }).select("-password")

        if (updateUser) {
            res.status(201).json({
                status: 201,
                message: "Successfully data updated"
            })
        } else {
            res.status(500).json({
                status: false,
                message: "data update failed"
            })
        }

    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            status: false,
            message: "something gone wrong"
        })
    }

}


// delete user
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(500).json({
                status: false,
                message: ("id must be required")
            })
        }

        const deleteUser = await User.findByIdAndDelete(id);
        if (deleteUser) {
            res.status(201).json({
                status: 201,
                message: "Successfully data deleted"
            })
        } else {
            return res.status(404).json({
                status: false,
                message: ("data delete process failed")
            })
        }

    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            status: false,
            message: "id must be required"
        })
    }
}

// all Fetch user

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password")

        if (users.length > 0) {
            return res.status(200).json({
                status: true,
                message: ("successfully fetched"),
                users
            })

        } else {
            return res.status(404).json({
                status: false,
                message: ("data fetch process failed")
            })
        }
    } catch (error) {
        console.log("error", error)
        res.status(500).json({
            status: false,
            message: "id must be required"
        })
    }
}