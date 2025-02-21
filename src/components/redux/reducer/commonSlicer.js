import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: true,
    status: '', 
    description: '',
    message: '',
    loading: false,
    notification: false
};

export const indicationSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload.mode;
        },
        setMessage: (state, action) => {
            state.status = action.payload.status;
            state.description = action.payload.description || '';
            state.message = action.payload.message;
        },
        clearMessage: (state) => {
            state.status = '';
            state.description = '';
            state.message = '';
        },
        setLoading: (state, action) => {
            console.log('Setting loading state to:', action.payload.loading);
            state.loading = action.payload.loading;
        },
        setNotification: (state, action) => {
            state.notification = action.payload.notification;
        }
    }
});

export const { setMode, setMessage, clearMessage, setLoading, setNotification } = indicationSlice.actions;

export default indicationSlice.reducer;