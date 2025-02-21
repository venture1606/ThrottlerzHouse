// src/components/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  token: null,
  userDetails: JSON.parse(localStorage.getItem('user')) || null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
      localStorage.setItem('isLoggedIn', action.payload ? 'true' : 'false');
    },
    setToken(state, action) {
      state.token = action.payload;
    },
    setUserDetails(state, action) {
      state.userDetails = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.userDetails = null;
      localStorage.setItem('isLoggedIn', 'false');
    }
  }
});



// Export userSlice actions and reducer
export const { setLoggedIn, setToken, setUserDetails, logout } = userSlice.actions;
export default userSlice.reducer;
