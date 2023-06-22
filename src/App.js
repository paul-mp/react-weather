import React, { useState } from "react";
import Bar from "./Bar";
import Box from "@mui/material/Box";
import SearchBox from "./SearchBox";
import FetchData from "./FetchData";
import GridCards from "./GridCards";

const WeatherApp = () => {
  const [cityName, setCityName] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [weatherData, fetchWeatherData] = FetchData(cityName);

  const handleSearch = (event) => {
    event.preventDefault(); // prevent the page from refreshing
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
        marginBottom="20px"
      >
        <SearchBox
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
          cityName={cityName}
        />
      </Box>
      <GridCards weatherData={weatherData} hasSearched={hasSearched} />
    </div>
  );
};

export default WeatherApp;
