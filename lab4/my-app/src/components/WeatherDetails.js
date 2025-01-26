import React from 'react';
import '../index.css';

function WeatherDetails({ data }) {
  const { temp, weather, forecast, wind, clouds, precipitation } = data;

  return (
    <div className="weather-details">
      <h2>Bieżąca pogoda</h2>
      <p className="detail">
        <span>Temperatura: </span>
        <span className="detail-value">{temp}°</span>
      </p>
      <p className="detail">
        <span>Warunki: </span>
        <span className="detail-value">{weather.description}</span>
      </p>

      <p>Prognoza na 5 dni:</p>
      <ul>
        {forecast.map((day, index) => (
          <li key={index}>
            <span>{day.date}: </span>
            <span>{day.temp}°, {day.description}</span>
          </li>
        ))}
      </ul>

      <p className="detail">
        <span>Wiatr: </span>
        <span className="detail-value">{wind.speed} m/s</span>, kierunek: <span className="detail-value">{wind.direction}°</span>
      </p>

      <p className="detail">
        <span>Zachmurzenie: </span>
        <span className="detail-value">{clouds}%</span>
      </p>

      <p className="detail">
        <span>Opady: </span>
        <span className="detail-value">{precipitation.amount} mm</span> ({precipitation.probability}%)
      </p>
    </div>
  );
}

export default WeatherDetails;