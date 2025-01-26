import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TemperatureContext } from '../context/TemperatureContext';
import { fetchWeatherDetails } from '../services/weatherAPI';
import WeatherDetails from '../components/WeatherDetails';

function CityPage() {
  const { cityName } = useParams();
  const { unit, setUnit } = useContext(TemperatureContext);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherDetails(cityName, unit).then(setWeatherData);
  }, [cityName, unit]);

  const handleUnitChange = (event) => {
    setUnit(event.target.value);
  };

  if (!weatherData) {
    return <p>Ładowanie danych...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{cityName} - Szczegóły Pogody</h1>
      <div className="mb-4">
        <label>Jednostka temperatury: </label>
        <select value={unit} onChange={handleUnitChange} className="border p-2 rounded">
          <option value="Celsius">Celsjusz</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
      </div>
      <WeatherDetails data={weatherData} />
    </div>
  );
}

export default CityPage;
