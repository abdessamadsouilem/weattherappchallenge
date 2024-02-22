const weatherService = require('../services/weatherService');
const errorHandler = require('../utils/errorHandler');

exports.getWeatherByCity = async (req, res) => {
    try {
        const city = req.params.city;
        const weatherData = await weatherService.getWeatherByCity(city);

        if (!weatherData) {
            return res.status(404).json({ message: 'Weather data not found for the specified city.' });
        }

        res.status(200).json(weatherData);
    } catch (error) {
        errorHandler.handleError(res, error);
    }
};
