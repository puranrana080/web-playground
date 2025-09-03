import React from "react";
import { Typography, Button, Container } from "@mui/material";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
        type="submit"
        onClick={() => console.log("You clicked me")}
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  );
}
