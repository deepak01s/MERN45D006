const express = require("express");
const dotenv = require("dotenv");
const userRouters = require("./routes/userRoutes")
const connectDB = require("./config/db");
dotenv.config();
const app = express();
app.use(express.json());
connectDB();
app.use("/user",userRouters);




const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running.......`);
});

