const mongoose = require('mongoose');

const conditionSchema = new mongoose.Schema({
    text: String,
    icon: String,
    code: Number
});

const hourSchema = new mongoose.Schema({
    time_epoch: Number,
    time: String,
    temp_c: Number,
    temp_f: Number,
    is_day: Number,
    condition: conditionSchema,
    wind_mph: Number,
    wind_kph: Number,
    wind_degree: Number,
    wind_dir: String,
    pressure_mb: Number,
    pressure_in: Number,
    precip_mm: Number,
    precip_in: Number,
    humidity: Number,
    cloud: Number,
    feelslike_c: Number,
    feelslike_f: Number,
    windchill_c: Number,
    windchill_f: Number,
    heatindex_c: Number,
    heatindex_f: Number,
    dewpoint_c: Number,
    dewpoint_f: Number,
    will_it_rain: Number,
    chance_of_rain: Number,
    will_it_snow: Number,
    chance_of_snow: Number,
    vis_km: Number,
    vis_miles: Number,
    gust_mph: Number,
    gust_kph: Number,
    uv: Number
});

const forecastDaySchema = new mongoose.Schema({
    date: String,
    date_epoch: Number,
    day: {
        maxtemp_c: Number,
        maxtemp_f: Number,
        mintemp_c: Number,
        mintemp_f: Number,
        avgtemp_c: Number,
        avgtemp_f: Number,
        maxwind_mph: Number,
        maxwind_kph: Number,
        totalprecip_mm: Number,
        totalprecip_in: Number,
        avgvis_km: Number,
        avgvis_miles: Number,
        avghumidity: Number,
        condition: conditionSchema,
        uv: Number
    },
    astro: {
        sunrise: String,
        sunset: String,
        moonrise: String,
        moonset: String,
        moon_phase: String,
        moon_illumination: String
    },
    hour: [hourSchema]
});

const locationSchema = new mongoose.Schema({
    name: String,
    region: String,
    country: String,
    lat: Number,
    lon: Number,
    tz_id: String,
    localtime_epoch: Number,
    localtime: String
});

const weatherSchema = new mongoose.Schema({
    location: locationSchema,
    current: {
        last_updated_epoch: Number,
        last_updated: String,
        temp_c: Number,
        temp_f: Number,
        is_day: Number,
        condition: conditionSchema,
        wind_mph: Number,
        wind_kph: Number,
        wind_degree: Number,
        wind_dir: String,
        pressure_mb: Number,
        pressure_in: Number,
        precip_mm: Number,
        precip_in: Number,
        humidity: Number,
        cloud: Number,
        feelslike_c: Number,
        feelslike_f: Number,
        vis_km: Number,
        vis_miles: Number,
        uv: Number,
        gust_mph: Number,
        gust_kph: Number
    },
    forecast: {
        forecastday: [forecastDaySchema]
    }
}, { timestamps: true });

const Weather = mongoose.model('weather_data', weatherSchema);

module.exports = Weather;
