import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Search({ handleInputChange, handleSearch, cityName }) {
  return (
    <form id="form" onSubmit={handleSearch} style={{ marginBottom: "100px" }}>
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
      <br />
      <Button
        variant="contained"
        type="submit"
        style={{
          marginTop: "8%",
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
