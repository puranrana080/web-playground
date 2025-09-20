import { configureStore } from "@reduxjs/toolkit"
import doctorReducer from "./doctorSlice"
import calendarReducer from "./calendarSlice"

export const store = configureStore({
    reducer:{
        doctor:doctorReducer,
        calendar:calendarReducer,
    }
})



