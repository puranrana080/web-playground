### Starter Project for the Material UI playlist

Download the code & run **npm install** to install dependencies before starting the app.

You'll also need to install Material UI as a dependency. To do this run **npm install @material-ui/core**



**using Theme + wrapper**
   import { createTheme, ThemeProvider } from "@mui/material";
   Make Wrapper <ThemeProvider theme={theme}></ThemeProvider>

* const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary:purple
  },
});

**using Radio**
  we used Radio, RadioGroup, FormControlLabel, FormLabel, FormControl,

**using json-server**
   json-server --watch data.db.json --port 8000
   here we created new note in db and displayed

**Drawer component**
   * import Drawer and Typography component
  


   

