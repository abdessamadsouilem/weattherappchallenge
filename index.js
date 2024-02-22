const express = require("express")
const server = express();
const connection = require("./config/db")
require("dotenv").config();
const PORT = process.env.PORT || 8080


const weatherRoutes = require('./routes/weatherRoutes');
server.use('/api/v1/weather', weatherRoutes);






server.listen(PORT,()=>{
    console.log('====================================');
    console.log("server up and running at "+PORT);
    connection();
    console.log('====================================');
})