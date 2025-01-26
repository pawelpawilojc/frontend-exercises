import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ unit, setUnit }) => {
  const [search, setSearch] = useState('');
  const [cities, setCities] = useState(['Warsaw', 'Krakow', 'Wroclaw', 'Gdansk', 'Poznan']);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = useCallback((city) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(city)) {
        return prevFavorites.filter((fav) => fav !== city);
      } else {
        return [...prevFavorites, city];
      }
    });
  }, []);

  const addCity = useCallback(() => {
    if (search && !cities.includes(search)) {
      setCities([...cities, search]);
    }
  }, [search, cities]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Weather in Poland</h1>

      <div className="flex items-center mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search city..."
          className="border rounded p-2 mr-2"
        />
        <button onClick={addCity} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {cities.map((city) => (
          <div key={city} className="block p-4 bg-gray-100 rounded shadow-md">
            <Link to={`/city/${city}`}>{city}</Link>
            <button
              onClick={() => toggleFavorite(city)}
              className="ml-4 text-sm text-blue-500 underline"
            >
              {favorites.includes(city) ? 'Remove from favorites' : 'Add to favorites'}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label className="mr-2">Temperature Unit:</label>
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="border rounded p-2"
        >
          <option value="metric">Celsius</option>
          <option value="imperial">Fahrenheit</option>
          <option value="standard">Kelvin</option>
        </select>
      </div>
    </div>
  );
};

export default Home;
