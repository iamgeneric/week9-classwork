//importing express
// const { Router } = require("express");
const express = require("express");
//
const router = express.Router();

//a signup endpoint
router.post("/signup", (req, res)=>{
    console.log(req.body)
})
module.exports = router