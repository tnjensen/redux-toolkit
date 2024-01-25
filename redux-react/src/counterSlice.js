import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
};

export const counterSlice = createSlice({
    //reducer name
    name: 'counter',
    initialState,
    //actions available
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        } 
    }
});
export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
