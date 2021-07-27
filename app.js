const express = require("express");
const app = express();

//importing the env variable
const dotenv = require("dotenv")
dotenv.config()

//importing userRoute from route
const userRoute = require ("./route/userRoute");
app.use(express.json())
app.use("/Api/Users", userRoute )
app.get("/",( req, res)=>{
    res.send("Welcome to my Api...")
})
app.listen(4000, ()=>{
    console.log("Server is running on Port 4000....")
});
//mongodb+srv://generic:<password>@cluster0.fyyjs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority