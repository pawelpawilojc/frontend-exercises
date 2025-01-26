import React from 'react';
import { useParams } from 'react-router-dom';
import CityWeather from './CityWeather';

const CityWeatherWrapper = ({ unit }) => {
  const { city } = useParams();
  return <CityWeather city={city} unit={unit} />;
};

export default CityWeatherWrapper;
