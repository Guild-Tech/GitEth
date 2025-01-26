import { createSlice } from '@reduxjs/toolkit';

// Initialize state with localStorage values (if available)
const initialState = {
  role: localStorage.getItem('role') || '',
  loginType: localStorage.getItem('loginType') || '',
};

const onboardStateSlice = createSlice({
  name: 'onboardState',
  initialState,
  reducers: {
    setRole(state, action) {
      state.role = action.payload;
      localStorage.setItem('role', action.payload); // Store in localStorage
    },
    setLoginType(state, action) {
      state.loginType = action.payload;
      localStorage.setItem('loginType', action.payload); // Store in localStorage
    },
    clearOnboardState(state) {
      state.role = '';
      state.loginType = '';
      localStorage.removeItem('role'); // Clear from localStorage
      localStorage.removeItem('loginType');
    },
  },
});

export const { setRole, setLoginType, clearOnboardState } = onboardStateSlice.actions;

export default onboardStateSlice.reducer;
