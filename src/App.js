import React, { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import SearchBox from "./SearchBox";
import Bar from "./Bar";
import Box from "@mui/material/Box";


const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchWeatherData = async () => {
    try {
      setHasSearched(true);
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching data from OpenWeatherAPI:", error);
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

      <Grid
        container
        spacing={8}
        style={{
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card weatherData={weatherData} hasSearched={hasSearched}></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card weatherData={weatherData} hasSearched={hasSearched}></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card weatherData={weatherData} hasSearched={hasSearched}></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card weatherData={weatherData} hasSearched={hasSearched}></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card weatherData={weatherData} hasSearched={hasSearched}></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card weatherData={weatherData} hasSearched={hasSearched}></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card weatherData={weatherData} hasSearched={hasSearched}></Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default WeatherApp;
