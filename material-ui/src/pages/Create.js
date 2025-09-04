import React from "react";
import { Typography, Button, Container } from "@mui/material";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {makeStyles} from "@mui/styles"


const useStyles = makeStyles({
  btn:{
    fontSize:60,
    backgroundColor:'voilet',
    '&:hover':{
      backgroundColor:'blue'
    }
  },
  title:{
    textDecoration:'underline',
    marginBottom:'20px'
  }
})

export default function Create() {
  const classes = useStyles()
  return (
    <Container>
      <Typography
      className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button
      className={classes.btn}
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
