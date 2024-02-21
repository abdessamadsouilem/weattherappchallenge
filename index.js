const express = require("express")
const server = express();
const connection = require("./config/db")
require("dotenv").config();
const PORT = process.env.PORT || 8080




server.get("/",(req,res)=>{
    res.json({message:"we made it here"})
})





server.listen(PORT,()=>{
    console.log('====================================');
    console.log("server up and running at "+PORT);
    connection();
    console.log('====================================');
})