import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: false,
};

export const indicationSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload.mode;
        },
    }
});

export const { setMode } = indicationSlice.actions;

export default indicationSlice.reducer;