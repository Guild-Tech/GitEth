import { useState } from 'react';
import axios from 'axios';

interface Repository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
}

interface Issue {
  id: number;
  title: string;
  body: string;
  state: string;
  url: string;
}

interface PullRequest {
  id: number;
  title: string;
  body: string;
  state: string;
  url: string;
}

const API_BASE_URL = 'https://ethopensource.onrender.com'; // Replace with your backend API URL

const useGitHub = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch user repositories
  const fetchRepositories = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const response:any = await axios.get(`${API_BASE_URL}/github/repositories`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setRepos(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch repositories');
    } finally {
      setLoading(false);
    }
  };

  // Fetch issues for a repository
  const fetchIssues = async (owner: string, repo: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const response: any = await axios.get(`${API_BASE_URL}/github/issues/${owner}/${repo}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setIssues(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch issues');
    } finally {
      setLoading(false);
    }
  };

  // Create an issue for a repository
  const createIssue = async (owner: string, repo: string, title: string, body: string): Promise<Issue | void> => {
    try {
      setLoading(true);
      setError(null);
      const response: any = await axios.post(
        `${API_BASE_URL}/github/issues/${owner}/${repo}`,
        { title, body },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to create issue');
    } finally {
      setLoading(false);
    }
  };

  // Fetch pull requests for a repository
  const fetchPullRequests = async (owner: string, repo: string): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      const response: any = await axios.get(`${API_BASE_URL}/github/pulls/${owner}/${repo}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setPullRequests(response.data);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch pull requests');
    } finally {
      setLoading(false);
    }
  };

  return {
    repos,
    issues,
    pullRequests,
    loading,
    error,
    fetchRepositories,
    fetchIssues,
    createIssue,
    fetchPullRequests,
  };
};

export default useGitHub;
