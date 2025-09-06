import React, { useState } from "react";
import { Typography, Button, Container, TextField } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

    const [titleErr, setTitleErr] = useState(false);
  const [detailsErr, setDetailsErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleErr(false)
    setDetailsErr(false)
    if(title===''){
      setTitleErr(true)
    }
     if(details===''){
      setDetailsErr(true)
    }

    if (title && details) {
      console.log(title, details);
    } 
  };

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

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mt: 2, mb: 2, display: "block" }}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleErr}
        ></TextField>
        <TextField
          sx={{ mt: 2, mb: 2, display: "block" }}
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          rows={4}
          required
          error={detailsErr}
        ></TextField>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>

      {/* icons */}
      <br />
    </Container>
  );
}
