import React, { useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Card from "./Card";
import SearchBox from "./SearchBox";

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
    <div className="body">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Weather App
      </h1>
      <div style={{ maxWidth: "100%", paddingTop: "12px" }}>
        <div>
          <Grid container>
            <Grid item xs={12}>
              <Grid
                container
                direction="column"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SearchBox
                  handleInputChange={handleInputChange}
                  handleSearch={handleSearch}
                  cityName={cityName}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Card weatherData={weatherData} hasSearched={hasSearched} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
