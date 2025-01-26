import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function CityCard({ cityName, unit }) {
  return (
    <div className="city-card">
      <h2>{cityName}</h2>
      <Link to={`/city/${cityName}`}>
        Szczegóły pogody
      </Link>
    </div>
  );
}

export default CityCard;
