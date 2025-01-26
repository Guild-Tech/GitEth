// store/onboardingSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { IOnboardingIndex } from "../types"; // Define an IOnboardingIndex interface if not already created

const initialState: IOnboardingIndex = {
  currentIndex: 1, // Initial step or index in the carousel
};

const onboardingSlice = createSlice({
  name: "onboardingIndex",
  initialState,
  reducers: {
    // Go to the next step
    nextStep(state) {
      state.currentIndex += 1;
    },
    // Go to the previous step
    prevStep(state) {
      if (state.currentIndex > 0) state.currentIndex -= 1;
    },
    // Set the index to a specific value (e.g., after skipping steps)
    setIndex(state, action) {
      state.currentIndex = action.payload;
    },
  },
});

export const { nextStep, prevStep, setIndex } = onboardingSlice.actions;
export default onboardingSlice.reducer;
