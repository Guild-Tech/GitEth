import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of the authentication state
interface AuthState {
  user: {
    uid: string;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
    username: string | null;
    token: string | null;
  } | null;
  isLoading: boolean;
  error: string | null;
}

// Helper function to load user data from localStorage
const loadUserFromLocalStorage = (): AuthState["user"] => {
  try {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Failed to parse user data from localStorage:", error);
    return null;
  }
};

// Initialize state with localStorage data if available
const initialState: AuthState = {
  user: loadUserFromLocalStorage(),
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Set the user state with the provided user data and persist to localStorage.
     * @param state - The current state of the reducer
     * @param action - The action to set the user state
     */
    setUser(
      state,
      action: PayloadAction<{
        uid: string;
        displayName: string | null;
        email: string | null;
        photoURL: string | null;
        username: string | null;
        token: string | null;
      } | null>
    ) {
      state.user = action.payload;

      // Persist user to localStorage
      if (action.payload) {
        localStorage.setItem("authUser", JSON.stringify(action.payload));
      } else {
        localStorage.removeItem("authUser");
      }
    },
    /**
     * Set the isLoading state of the reducer with the provided boolean value.
     * @param state - The current state of the reducer
     * @param action - The action to set the isLoading state
     */
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    /**
     * Set the error state with the provided error message.
     * @param state - The current state of the reducer
     * @param action - The action to set the error state
     */
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
