import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state type
interface UserDataState {
  name: string;
  email: string;
  bio: string;
  role: string;
  telegram: string;
  github: string;
  linkedin: string;
  twitter: string;
  location: string;
  company: string;
}

// Initial state
const initialState: UserDataState = {
  name: "",
  email: "",
  bio: "",
  role: "",
  telegram: "",
  github: "",
  linkedin: "",
  twitter: "",
  location: "",
  company: "",
};

// Create the slice
const onBoardingSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // Action to update a specific field
    updateField(
      state,
      action: PayloadAction<{ field: keyof UserDataState; value: string }>
    ) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    // Action to update multiple fields at once
    setUserData(state, action: PayloadAction<Partial<UserDataState>>) {
      Object.assign(state, action.payload);
    },
    // Action to reset the state
    resetUserData() {
      return initialState;
    },
  },
});

// Export actions and reducer
export const { updateField, setUserData, resetUserData } = onBoardingSlice.actions;
export default onBoardingSlice.reducer;
