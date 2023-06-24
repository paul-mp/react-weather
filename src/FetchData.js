import { useState } from "react";
import axios from "axios";

const FetchData = (cityName) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchWeatherData = async () => {
    try {
      // Fetch latitude and longitude for given city name
      const geoResponse = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
      );

      if (!geoResponse.data || geoResponse.data.length === 0) {
        throw new Error(`Cannot find the city: ${cityName}`);
      }

      const { lat, lon } = geoResponse.data[0];

      // Fetch weather data for the given latitude and longitude
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${API_KEY}`
      );
      setWeatherData(weatherResponse.data);
    } catch (error) {
      console.error("Error fetching data from OpenWeatherAPI:", error);
    }
  };

  return [weatherData, fetchWeatherData];
};

export default FetchData;
