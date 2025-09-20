import React from 'react';
import { List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedDoctor } from '../redux/doctorSlice';

const DoctorList = () => {
  const dispatch = useDispatch();
  const doctors = useSelector(state => state.doctor.doctors);
  const selectedDoctor = useSelector(state => state.doctor.selectedDoctor);

  return (
    <List>
      {doctors.map(doc => (
        <ListItem key={doc.id} disablePadding>
          <ListItemButton
            selected={selectedDoctor?.id === doc.id}
            onClick={() => dispatch(setSelectedDoctor(doc))}
          >
            <ListItemText primary={doc.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default DoctorList;
