import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function BasicCard({ dayData, hasSearched }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Function to get day of the week from timestamp
  const getDayOfWeek = (timestamp) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(timestamp * 1000); // Convert timestamp to milliseconds
    return days[date.getDay()];
  };

  return (
    <>
      {hasSearched ? (
        <Card
          sx={{
            maxWidth: 300,
            minWidth: isSmallScreen ? 200 : 300,
            minHeight: 300,
            margin: 1, // Add some margin between cards
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
        >
          <CardContent style={{ color: "white" }}>
            <Typography sx={{ mb: 1.5 }} variant="h5">
              <b>{getDayOfWeek(dayData.dt)}</b>
              <br />
              <img
                src={`http://openweathermap.org/img/wn/${dayData.weather[0].icon}.png`}
                alt={dayData.weather[0].description}
                style={{ width: "70px" }}
              />
            </Typography>
            <Typography variant="h6">
              {hasSearched ? "Condition: " : ""}
              {dayData.weather[0].main}
            </Typography>
            <Typography variant="h6">
              {hasSearched ? "Temperature: " : ""}
              {Math.floor(dayData.temp.day - 273.15)}
              {hasSearched ? "°C" : ""}
            </Typography>
            <Typography variant="h6">
              {hasSearched ? "Feels like: " : ""}
              {Math.floor(dayData.feels_like.day - 273.15)}
              {hasSearched ? "°C" : ""}
            </Typography>
            <Typography variant="h6">
              {hasSearched ? "Humidity: " : ""}
              {dayData.humidity}
              {hasSearched ? "%" : ""}
            </Typography>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
}
