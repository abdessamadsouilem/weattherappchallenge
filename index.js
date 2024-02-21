const express = require("express")
const server = express();


server.get("/",(req,res)=>{
    res.json({message:"we made it here"})
})





server.listen(3000,()=>{
    console.log('====================================');
    console.log("server up and running ");
    console.log('====================================');
})