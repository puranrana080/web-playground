import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DoctorList from './components/DoctorList';
import CalendarView from './components/CalendarView';
import { Grid } from "@mui/material";


function App() {
  return (
    <Provider store={store}>
       <Grid container spacing={2} padding={2}>
        <Grid  size={3} >
          <DoctorList />
        </Grid>
        <Grid size={{xs:9,md:9}}  sx={{border:'1px solid red',width:'90%'}} >
          <CalendarView />
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;