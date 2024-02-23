const Weather = require('../models/weatherModel');

exports.getWeatherByCity = async (city) => {
    try {
        const weatherData = await Weather.findOne({"location.name": city});
        return weatherData;
    } catch (error) {
        throw new Error(`Error retrieving weather data: ${error.message}`);
    }
};
