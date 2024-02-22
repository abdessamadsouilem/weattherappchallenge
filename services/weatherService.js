const Weather = require('../models/weatherModel');

exports.getWeatherByCity = async (city) => {
    try {
        const weatherData = await Weather.findOne({"location.name": city});
        if (!weatherData) {
            throw new Error('City not found');
        }
        return weatherData;
    } catch (error) {
        throw new Error(`Error retrieving weather data: ${error.message}`);
    }
};
