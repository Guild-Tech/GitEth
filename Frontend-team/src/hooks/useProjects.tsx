import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://ethopensource.onrender.com'; // Update with your actual API base URL

const useProjects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Create a new project
  const createProject = async (formData: FormData) => {
    try {
      setLoading(true);
      setError(null);
      console.log(localStorage.getItem('token'),formData)

      const response = await axios.post(`${API_BASE_URL}/project/create-project`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include auth token if required
        },
      });
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to create project');
    } finally {
      setLoading(false);
    }
  };

  // Get all projects with filters and sorting
  const fetchProjects = async (filters: Record<string, string>) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/projects/project-matching`, { params: filters });
      setProjects(response.data as any);
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  // Assign a contributor to a project
  const assignContributor = async (projectId: string, contributorId: string) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(
        `${API_BASE_URL}/projects/${projectId}/assign`,
        { contributorId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to assign contributor');
    } finally {
      setLoading(false);
    }
  };

  // Filter contributors
  const filterContributors = async (filters: Record<string, string>) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/projects/contributors`, { params: filters });
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to filter contributors');
    } finally {
      setLoading(false);
    }
  };

  return {
    projects,
    loading,
    error,
    createProject,
    fetchProjects,
    assignContributor,
    filterContributors,
  };
};

export default useProjects;
