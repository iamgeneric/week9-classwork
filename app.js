const express = require("express");
//importing userRoute from route
const userRoute = require ("./route/userRoute");
//importing the env variable
const dotenv = require("dotenv")
// dotenv.config({path: "./config.env"});
const db = require("./config/db")
//configure dotenv for environment variable
dotenv.config({path: "./config.env"});
const app = express();

db()

//body parser
app.use(express.json())

app.use("/Api/Users", userRoute )

app.get("/",( req, res)=>{
    res.send("Welcome to my Api...")
})
app.listen(4000, ()=>{
    console.log("Server is running on Port 4000....")
});

//
