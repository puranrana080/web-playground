import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    selectedDoctor:null,
    doctors:[
        { id: 1, name: "Dr. A" },
    { id: 2, name: "Dr. B" },
    { id: 3, name: "Dr. C" },
    ]
}

const doctorSlice = createSlice({
    name:'doctor',
    initialState,
    reducers:{
        setSelectedDoctor:(state,action)=>{
            state.selectedDoctor =action.payload
        }
    }
})

export const {setSelectedDoctor} = doctorSlice.actions
export default doctorSlice.reducer;