import React, { useState, useContext } from 'react';
import { TemperatureContext } from '../context/TemperatureContext';
import CityCard from '../components/CityCard';
import '../index.css';

const INITIAL_CITIES = ['Wrocław', 'Leszno', 'Toruń', 'Zielona Góra', 'Lublin'];

function HomePage() {
  const [search, setSearch] = useState('');
  const [cities, setCities] = useState(INITIAL_CITIES);
  const { unit } = useContext(TemperatureContext);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const addCity = () => {
    if (search && !cities.includes(search)) {
      setCities([...cities, search]);
      setSearch('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Polskie Miasta - Pogoda</h1>
      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Wyszukaj miasto"
          className="border p-2 rounded"
        />
        <button onClick={addCity} className="bg-blue-500 text-white p-2 rounded ml-2">
          Dodaj
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cities.map((city) => (
          <CityCard key={city} cityName={city} unit={unit} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
