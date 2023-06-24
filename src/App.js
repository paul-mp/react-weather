import React, { useState } from "react";
import Bar from "./Bar";
import Box from "@mui/material/Box";
import SearchBox from "./SearchBox";
import FetchData from "./FetchData";
import GridCards from "./GridCards";
import WeatherInfo from "./WeatherInfo";
import "./App.css";

const WeatherApp = () => {
  const [cityName, setCityName] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [weatherData, fetchWeatherData] = FetchData(cityName);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let today = new Date();
  let dayName = days[today.getDay()];
  let monthName = months[today.getMonth()];
  let date = dayName + " " + today.getDate() + " " + monthName;

  const handleSearch = (event) => {
    event.preventDefault();
    fetchWeatherData();
    setHasSearched(true);
  };

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  return (
    <div>
      <Bar />
      <br />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginBottom="-80px"
      >
        <SearchBox
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          cityName={cityName}
        />
      </Box>
      <WeatherInfo
        hasSearched={hasSearched}
        weatherData={weatherData}
        cityName={cityName}
        date={date}
      />
      <br />
      <GridCards weatherData={weatherData} hasSearched={hasSearched} />
    </div>
  );
};

export default WeatherApp;
