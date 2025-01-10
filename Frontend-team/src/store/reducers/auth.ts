import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of the authentication state
interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  username: string | null;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

// Helper function to load user and token from localStorage
const loadAuthFromLocalStorage = (): { user: User | null; token: string | null } => {
  try {
    const storedUser = localStorage.getItem("authUser");
    const storedToken = localStorage.getItem("authToken");
    return {
      user: storedUser ? JSON.parse(storedUser) : null,
      token: storedToken || null,
    };
  } catch (error) {
    console.error("Failed to parse auth data from localStorage:", error);
    return { user: null, token: null };
  }
};

// Initialize state with localStorage data if available
const { user, token } = loadAuthFromLocalStorage();

const initialState: AuthState = {
  user,
  token,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Set the user state and token with the provided data, and persist to localStorage.
     */
    setUserAndToken(
      state,
      action: PayloadAction<{ user: User | null; token: string | null }>
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;

      // Persist user and token to localStorage
      if (action.payload.user && action.payload.token) {
        localStorage.setItem("authUser", JSON.stringify(action.payload.user));
        localStorage.setItem("authToken", action.payload.token);
      } else {
        localStorage.removeItem("authUser");
        localStorage.removeItem("authToken");
      }
    },
    /**
     * Set the isLoading state of the reducer with the provided boolean value.
     */
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    /**
     * Set the error state with the provided error message.
     */
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    /**
     * Clear the authentication state and remove data from localStorage.
     */
    clearAuth(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("authUser");
      localStorage.removeItem("authToken");
    },
  },
});

export const { setUserAndToken, setLoading, setError, clearAuth } = authSlice.actions;
export default authSlice.reducer;
