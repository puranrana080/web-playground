import React from "react";
import { Typography, Button, Container } from "@mui/material";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
        endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>
      {/* icons */}
    <br/>
      <AddCircleOutlinedIcon/>
       <AddCircleOutlinedIcon color="secondary" fontSize="large"/>
       <AddCircleOutlinedIcon color="secondary" fontSize="small"/>
       <AddCircleOutlinedIcon color="action" fontSize="small"/>
       <AddCircleOutlinedIcon color="error" fontSize="small"/>
       <AddCircleOutlinedIcon color="disabled" fontSize="small"/>

    </Container>
  );
}
