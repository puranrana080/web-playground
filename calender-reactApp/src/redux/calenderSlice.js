import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    view :'timeGridWeek',
    event:[]
} 

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setView: (state, action) => { state.view = action.payload },
    setEvents: (state, action) => { state.events = action.payload },
    addEvent: (state, action) => { state.events.push(action.payload) },
  },
});

export const { setView, setEvents, addEvent } = calendarSlice.actions;
export default calendarSlice.reducer;