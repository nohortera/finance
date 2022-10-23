import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    ms: 5000,
}

export const intervalSlice = createSlice({
    name: 'interval',
    initialState,
    reducers: {
        updateInterval: (state, action) => {
            state.ms = action.payload
        }
    }
})

export const {updateInterval} = intervalSlice.actions
export default intervalSlice.reducer
