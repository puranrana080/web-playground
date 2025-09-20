import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  view: "timeGridWeek",
  events: [ {
    id: 1,
    title: "Dr. A Available",
    start: "2025-09-21T10:00:00",
    end: "2025-09-21T12:00:00",
    color: "#d8fabaff"
  },
  {
    id: 2,
    title: "Dr. B Unavailable",
    start: "2025-09-22T09:00:00",
    end: "2025-09-22T11:00:00",
    color: "#f38484ff"
  }],
  slotMinTime: "08:00:00", // default start time
  slotMaxTime: "18:00:00", // default end time
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    setSlotMinTime: (state, action) => {
      state.slotMinTime = action.payload;
    },
    setSlotMaxTime: (state, action) => {
      state.slotMaxTime = action.payload;
    },
  },
});

export const { setView, setEvents, addEvent, setSlotMinTime, setSlotMaxTime } =
  calendarSlice.actions;
export default calendarSlice.reducer;
