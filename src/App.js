import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [cityName, setCityName] = useState('');
    const API_KEY = 'caa488847ced03e3f28f084aba8e77a9';

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching data from OpenWeatherAPI:', error);
        }
    };

    const handleSearch = (event) => {
        event.preventDefault(); // prevent the page from refreshing
        fetchWeatherData();
    };

    const handleInputChange = (event) => {
        setCityName(event.target.value);
    };

    return (
        <div>
            <form id="form" onSubmit={handleSearch}>
                <input 
                    type="search" 
                    id="query" 
                    name="q" 
                    placeholder="Search..." 
                    onChange={handleInputChange}
                    value={cityName}
                />
                <button type="submit">Search</button>
            </form>
            <div>
                {weatherData ? (
                    <div>
                        <h1>{weatherData.name}</h1>
                        <h2>{weatherData.weather[0].main}</h2>
                        <p>{Math.floor(weatherData.main.temp - 273.15)}°C</p>
                    </div>
                ) : (
                    <p>Enter a city to search</p>
                )}
            </div>
        </div>
    );
};

export default WeatherApp;
