import {configureStore} from "@reduxjstoolkit/"
import doctorReducer from "./doctorSlice"
import calenderReducer from "./doctorSlice"

export const store = configureStore({
    reducer:{
        doctor:doctorReducer,
        calender:calenderReducer,
    }
})
