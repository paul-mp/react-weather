import Grid from "@mui/material/Grid";
import Card from "./Card";

const GridCards = ({ weatherData, hasSearched }) => {
  return (
    <Grid
      container
      spacing={8}
      style={{
        justifyContent: "center",
        alignContent: "center"
      }}
    >
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card weatherData={weatherData} hasSearched={hasSearched} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card weatherData={weatherData} hasSearched={hasSearched} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card weatherData={weatherData} hasSearched={hasSearched} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card weatherData={weatherData} hasSearched={hasSearched} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card weatherData={weatherData} hasSearched={hasSearched} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card weatherData={weatherData} hasSearched={hasSearched} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card weatherData={weatherData} hasSearched={hasSearched} />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card weatherData={weatherData} hasSearched={hasSearched} />
      </Grid>
    </Grid>
  );
};

export default GridCards;
