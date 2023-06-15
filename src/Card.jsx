import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


export default function BasicCard({ weatherData, hasSearched }) {
  const iconUrl = `http://openweathermap.org/img/wn/${
    weatherData && weatherData.weather[0].icon
  }.png`;

  return (
    <>
      {hasSearched ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{ maxWidth: 300, minWidth: 300, minHeight: 300 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent>
              <Typography sx={{ mb: 1.5 }} variant="h5">
                <b>{weatherData && weatherData.name}</b>
                <br />
                <br />
                <img
                  src={iconUrl}
                  alt={weatherData && weatherData.weather[0].description}
                  style={{ width: "70px" }}
                />
              </Typography>
              <Typography variant="h6">
                {hasSearched ? "Condition: " : ""}
                {weatherData && weatherData.weather[0].main}
              </Typography>
              <Typography variant="h6">
                {hasSearched ? "Temperature: " : ""}
                {weatherData &&
                  weatherData.main &&
                  Math.floor(weatherData.main.temp - 273.15)}
                {hasSearched ? "°C" : ""}
              </Typography>
              <Typography variant="h6">
                {hasSearched ? "Feels like: " : ""}
                {Math.floor(
                  weatherData && weatherData.main.feels_like - 273.15
                )}
                {hasSearched ? "°C" : ""}
              </Typography>
              <Typography variant="h6">
                {hasSearched ? "Pressure: " : ""}
                {weatherData && weatherData.main.pressure}
                {hasSearched ? "hPa" : ""}
              </Typography>
              <Typography variant="h6">
                {hasSearched ? "Humidity: " : ""}
                {weatherData && weatherData.main.humidity}
                {hasSearched ? "°%" : ""}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ) : null}
    </>
  );
}
