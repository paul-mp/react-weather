import { useState } from "react";
import axios from "axios";

const FetchData = (cityName) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching data from OpenWeatherAPI:", error);
    }
  };

  return [weatherData, fetchWeatherData];
};

export default FetchData;
