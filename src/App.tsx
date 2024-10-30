import React, { useState } from 'react';
import { WeatherData } from './types/WeatherData';
import axios from 'axios';

import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css'


function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    setError(null);
    try {
      const apiKey = 'c6861c716a085f252916274bbcc0a94d';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      const data = response.data;
      const weatherData: WeatherData = {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon,
      };
      setWeather(weatherData);
    } catch (error) {
      setError("City not found. Please try again");
    }
  };

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {weather && < WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
