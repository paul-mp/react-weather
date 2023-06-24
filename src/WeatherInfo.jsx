import { Grid, Typography } from "@mui/material";

const WeatherInfo = ({ hasSearched, weatherData, cityName, date }) => {
  if (!hasSearched || !weatherData) {
    return null;
  }

  return (
    <>
      <Typography variant="h3" align="center" style={{ color: "white" }}>
        {cityName}
      </Typography>
      <Typography variant="h6" align="center" style={{ color: "#E4E833" }}>
        {date}
      </Typography>
      <br />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2} // adjust as needed
      >
        <Grid item>
          <Typography variant="h5" style={{ color: "white" }}>
            Temperature:{" "}
            {Math.floor(weatherData && weatherData.current.temp - 273.15)}°C
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" style={{ color: "white" }}>
            Feels like:{" "}
            {Math.floor(weatherData && weatherData.current.feels_like - 273.15)}
            °C
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" style={{ color: "white" }}>
            Humidity: {weatherData && weatherData.current.humidity}%
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" style={{ color: "#E4E833" }}>
            {weatherData && weatherData.current.weather[0].main}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default WeatherInfo;
