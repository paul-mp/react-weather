import React, { useState } from "react";
import Bar from "../Components/Bar";
import Box from "@mui/material/Box";
import SearchBox from "../Components/SearchBox";
import FetchData from "../Components/FetchData";
import GridCards from "../Components/GridCards";
import "../Styles/App.css";
//import HourlyWeatherChart from "../Components/WeatherChart";

const WeatherApp = () => {
  const [cityName, setCityName] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [weatherData, fetchWeatherData] = FetchData(cityName);

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
      <GridCards weatherData={weatherData} hasSearched={hasSearched} />
      {/* Weather chart doesn't entirely work. Fix later */}
      {/*hasSearched && weatherData && (
        <HourlyWeatherChart weatherData={weatherData.hourly} />
      )*/}
    </div>
  );
};

export default WeatherApp;
