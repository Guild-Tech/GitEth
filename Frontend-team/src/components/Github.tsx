import React, { useEffect, useState } from "react";
import axios from "axios";
import { createOAuthAppAuth } from "@octokit/auth-oauth-app";
// Define the structure of the response from the backend
interface AuthResponse {
    token: string;
    repos: Repository[];
    role: string;
}

interface Repository {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
}

const GitHubAuth: React.FC = () => {
    const [user, setUser] = useState<AuthResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const auth = createOAuthAppAuth({
        clientType: "oauth-app",
        clientId: "Ov23lijj4n7CkTxc3ENH",
        clientSecret: "2da030fed1a5e30354848351e936cc7e83050c5f",
      });
      
      const githubAuth = async () => {
          
          const appAuthentication = await auth({
            type: "oauth-app",
          });
          console.log(appAuthentication)
      }
    useEffect(() => {
        // Check for `code` in the URL to handle the GitHub callback
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (code) {
            // Exchange code for token and user info
            axios
                .get<AuthResponse>(`https://ethopensource.onrender.com/auth/github/callback?code=${code}`)
                .then((response: any) => {
                    const { token, repos, role } = response.data;
                    setUser({ token, repos, role });
                    localStorage.setItem("token", token); // Store token in localStorage
                    window.history.replaceState({}, document.title, "/"); // Clean the URL
                })
                .catch((err) => {
                    console.error("Error during authentication:", err);
                    setError("Failed to authenticate with GitHub.");
                });
        }
    }, []);

    // const handleLogin = () => {
    //     window.location.href = "https://ethopensource.onrender.com/auth/github";
    // };

    return (
        <div style={{ textAlign: "center", marginTop: "500px" }} className="">
            <h1>GitHub Login</h1>
            {!user ? (
                <div>
                    <button
                        onClick={githubAuth}
                        style={{
                            padding: "10px 20px",
                            fontSize: "16px",
                            backgroundColor: "#24292e",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Log in with GitHub
                    </button>
                </div>
            ) : (
                <div>
                    <h2>Welcome!</h2>
                    <p>
                        <strong>Role:</strong> {user.role}
                    </p>
                    <h3>Your Repositories:</h3>
                    <ul>
                        {user.repos.map((repo) => (
                            <li key={repo.id}>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                    {repo.full_name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
        </div>
    );
};

export default GitHubAuth;
