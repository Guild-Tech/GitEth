import axios from "axios";

// Base URL configuration
const API = axios.create({
    baseURL: "https://ethopensource.onrender.com", // Replace with your actual backend URL
    headers: {
        "Content-Type": "application/json",
    },
});

// Types for Auth Response
interface AuthResponse {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

// Redirect to GitHub for OAuth
export const redirectToGitHubAuth = () => {
    window.location.href = `${API.defaults.baseURL}/auth/github`;
};

// Handle GitHub OAuth Callback
export const handleGitHubCallback = async (code: string): Promise<AuthResponse> => {
    try {
        const response: any = await API.get(`/auth/github/callback?code=${code}`);
        return response.data;
    } catch (error: any) {
        console.error("GitHub Auth Callback Error:", error.message);
        throw new Error(error.response?.data?.error || "Authentication failed");
    }
};
