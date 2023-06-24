import Grid from "@mui/material/Grid";
import Card from "./Card";

const GridCards = ({ weatherData, hasSearched }) => {
  const dailyData =
    weatherData && Array.isArray(weatherData.daily)
      ? weatherData.daily.slice(0, 7)
      : [];

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {dailyData.map((day, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card dayData={day} hasSearched={hasSearched} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GridCards;
