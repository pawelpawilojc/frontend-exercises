import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '4bad19a3831e73bb1fce860f8c633c7c';

const fetchWeatherData = async (city, unit) => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`;

    const [current, forecast] = await Promise.all([
      axios.get(url),
      axios.get(forecastUrl),
    ]);

    return {
      current: current.data,
      forecast: forecast.data,
    };
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

const CityWeather = ({ city, unit }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData(city, unit).then(setWeatherData);
  }, [city, unit]);

  if (!weatherData) return <p>Loading...</p>;

  const { current, forecast } = weatherData;
  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">{current.name}</h2>
      <p>Temperature: {current.main.temp}°C</p>
      <p>Conditions: {current.weather[0].description}</p>
      <p>Wind: {current.wind.speed} m/s, {current.wind.deg}°</p>
      <p>Cloudiness: {current.clouds.all}%</p>

      <h3 className="text-lg font-semibold mt-4">5-Day Forecast</h3>
      <ul>
        {forecast.list.slice(0, 5).map((item, index) => (
          <li key={index}>
            {new Date(item.dt * 1000).toLocaleDateString()}: {item.main.temp}°C, {item.weather[0].description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityWeather;
