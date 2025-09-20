import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const AppointmentModal = ({ open, onClose, onSave }) => {
  // const [status, setStatus] = useState("Available");

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      // fullWidth 
      slotProps={{
        paper: {
          sx: {
            p: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            // maxWidth: "500px", 
      // width: "100%",
          },
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center", width: "100%" }}>
        Set your Appointment
      </DialogTitle>
      <DialogContent sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          width: "100%",
        }}>
         <Button variant="contained" color="success" onClick={() => onSave("available")}>
          In Person
        </Button>
        <Button variant="outlined" onClick={() => onSave("unavailable")}>
          Unavailable
        </Button>


      </DialogContent>

      {/* <DialogActions
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          width: "100%",
        }}
      >
       
      </DialogActions> */}
    </Dialog>
  );
};

export default AppointmentModal;
