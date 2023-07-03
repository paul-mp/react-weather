import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Search({ handleInputChange, handleSearch, cityName }) {
  const styles = {
    color: "black",
    borderBottomColor: "white",
  };

  const labelStyles = {
    color: "black",
  };

  return (
    <form
      id="form"
      onSubmit={handleSearch}
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      <TextField
        type="search"
        label="Enter city name"
        variant="standard"
        id="query"
        name="q"
        placeholder="Search..."
        onChange={handleInputChange}
        value={cityName}
        InputProps={{
          // add this line
          style: styles, // use the styles defined above
        }}
        InputLabelProps={{
          // add this line
          style: labelStyles, // use the label styles defined above
        }}
      />
      <Button
        variant="contained"
        type="submit"
        style={{
          marginLeft: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Submit
      </Button>
    </form>
  );
}
