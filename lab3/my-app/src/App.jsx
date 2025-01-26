import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Strona główna
import CityWeatherWrapper from './components/CityWeatherWrapper'; // Wrapper na szczegóły pogody

const App = () => {
  const [unit, setUnit] = useState('metric'); // Zarządzanie jednostkami

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home unit={unit} setUnit={setUnit} />} />
        <Route path="/city/:city" element={<CityWeatherWrapper unit={unit} />} />
      </Routes>
    </Router>
  );
};

export default App;
