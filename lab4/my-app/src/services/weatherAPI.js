const API_KEY = '4bad19a3831e73bb1fce860f8c633c7c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export async function fetchWeatherDetails(city, unit) {
  const unitMap = {
    Celsius: 'metric',
    Fahrenheit: 'imperial',
    Kelvin: 'standard',
  };
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=${unitMap[unit]}&appid=${API_KEY}`
  );
  const data = await response.json();
  const forecastResponse = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=${unitMap[unit]}&appid=${API_KEY}`
  );
  const forecastData = await forecastResponse.json();

  return {
    temp: data.main.temp,
    weather: data.weather[0],
    forecast: forecastData.list.slice(0, 5).map((item) => ({
      date: item.dt_txt,
      temp: item.main.temp,
      description: item.weather[0].description,
    })),
    wind: { speed: data.wind.speed, direction: data.wind.deg },
    clouds: data.clouds.all,
    precipitation: {
      amount: forecastData.list[0].rain?.['3h'] || 0,
      probability: forecastData.list[0].pop * 100,
    },
  };
}
