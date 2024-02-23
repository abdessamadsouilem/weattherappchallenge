const express = require("express")
const server = express();
const cors = require("cors")
const connection = require("./config/db")
require("dotenv").config();
const PORT = process.env.PORT || 8080

const corsOptions = {
    origin: function (origin, callback) {
        console.log('Origin attempting to access:', origin);
        if (process.env.FRONT_URI === origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

server.use(cors(corsOptions));




const weatherRoutes = require('./routes/weatherRoutes');
server.use('/api/v1/weather', weatherRoutes);






server.listen(PORT,()=>{
    console.log('====================================');
    console.log("server up and running at "+PORT);
    connection();
    console.log('====================================');
})