import Grid from "@mui/material/Grid";
import Card from "./Card";
import Box from "@mui/material/Box";

const GridCards = ({ weatherData, hasSearched }) => {
  const dailyData =
    weatherData && Array.isArray(weatherData.daily)
      ? weatherData.daily.slice(0, 8)
      : [];

  return (
    <Grid container spacing={2}>
      {dailyData.map((day, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Box display="flex" justifyContent="center">
            <Card dayData={day} hasSearched={hasSearched} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default GridCards;
