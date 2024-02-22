const mongoose = require("mongoose");
require("dotenv").config();

const connection = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connection to db establish successfully");
    }).catch((err)=>{
        console.log("failed to connect to mongodb",err);
    })
}

module.exports = connection