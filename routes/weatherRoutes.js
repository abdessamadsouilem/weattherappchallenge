const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Route to get weather data by city
router.get('/city/:city', weatherController.getWeatherByCity);

module.exports = router;