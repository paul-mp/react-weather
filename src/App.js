import React, { useState, useEffect } from "react";
//import './App.css';
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const apikey = process.env.REACT_APP_API_KEY;

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const API_KEY = apikey;

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

  const handleSearch = (event) => {
    event.preventDefault(); // prevent the page from refreshing
    fetchWeatherData();
  };

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  useEffect(() => {
    if (weatherData && weatherData.weather[0].main === "Clouds") {
      document.body.style.backgroundColor = "rgb(87, 102, 128)";
    } else if (weatherData && weatherData.weather[0].main === "Haze") {
      document.body.style.backgroundColor = "rgb(93, 143, 120)";
    } else if (weatherData && weatherData.weather[0].main === "Clear") {
      document.body.style.backgroundColor = "rgb(150, 150, 150)";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [weatherData]);

  return (
    <div className="body">
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        App
      </h1>
      <div style={{ maxWidth: "100%", paddingTop: "12px" }}>
        <div>
          <Grid container>
            <Grid container direction="column" item xs={12}>
              <Grid
                item
                xs
                direction="column"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <form id="form" onSubmit={handleSearch}>
                  <TextField
                    type="search"
                    label="Enter city name"
                    variant="standard"
                    id="query"
                    name="q"
                    placeholder="Search..."
                    onChange={handleInputChange}
                    value={cityName}
                  />

                  <Button
                    variant="contained"
                    type="submit"
                    style={{ marginTop: "4%" }}
                  >
                    Submit
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>

      <div id="data">
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
