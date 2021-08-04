//importing express
// const { Router } = require("express");
const express = require("express");
const User = require("../models/userModel");
//
const router = express.Router();

//a signup endpoint
router.post("/signup", async(req, res)=> {
    try{
        let {firstName, lastName, email, password}= req.body
        const checkEmail = await User.findOne({email});
        
        if (checkEmail){
            return res.json({
                status:"failed",
                message: "Email already exist"
            });
        }
        const newUser = { firstName, lastName, email, password};

        const createUser = await User.create(newUser);
        res.status(201).json({
            status: "success",
             data: {
                id: createUser._id,
                firtName: createUser.firstName,
                lastName: createUser.lastName,
                email: createUser.email,
        },
    });
    }catch(err){

    }
        
    
});

module.exports = router