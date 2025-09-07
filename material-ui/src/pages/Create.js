import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import{ useNavigate }from "react-router-dom"

export default function Create() {
  const navigate = useNavigate()
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [titleErr, setTitleErr] = useState(false);
  const [detailsErr, setDetailsErr] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleErr(false);
    setDetailsErr(false);
    if (title === "") {
      setTitleErr(true);
    }
    if (details === "") {
      setDetailsErr(true);
    }

    if (title && details) {
      fetch('http://localhost:8000/notes',{
        method:'POST',
        headers:{'Content-type':"application/json"},
        body:JSON.stringify({title,details,category})
      }).then(()=> navigate('/'))
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

        <FormControl sx={{ mt: 2, mb: 2, display: "block" }}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="remainders"
              control={<Radio />}
              label="Remainders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>

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
