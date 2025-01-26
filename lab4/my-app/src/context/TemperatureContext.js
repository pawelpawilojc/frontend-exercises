import React, { createContext, useState, useEffect } from 'react';

// Tworzymy kontekst
export const TemperatureContext = createContext();

export function TemperatureProvider({ children }) {
  const [unit, setUnit] = useState(() => {
    // Pobieramy jednostkę z localStorage lub ustawiamy domyślną wartość
    return localStorage.getItem('temperatureUnit') || 'Celsius';
  });

  // Zapisujemy jednostkę w localStorage przy każdej zmianie
  useEffect(() => {
    localStorage.setItem('temperatureUnit', unit);
  }, [unit]);

  return (
    <TemperatureContext.Provider value={{ unit, setUnit }}>
      {children}
    </TemperatureContext.Provider>
  );
}
