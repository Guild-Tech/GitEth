import { useState } from 'react';
import axios from 'axios';

interface ContributorData {
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  location: string;
  biography?: string;
  portfolioLink?: string;
  identify: string;
  preferredSkills?: string[];
  goals?: string[];
  proficiencyLevel?: string;
  termsAccepted: boolean;
}

// interface ContributorResponse {
//   success: boolean;
//   message: string;
//   data?: ContributorData;
//   error?: string;
// }

const API_BASE_URL = 'https://ethopensource.onrender.com'; // Replace with your backend API URL

const useContributor = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const updateContributor = async (contributorData: ContributorData): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage
      if (!token) {
        throw new Error('User is not authenticated');
      }

      const response: any = await axios.patch(
        `${API_BASE_URL}/update-contributor`,
        contributorData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setSuccess(response.data.message);
      } else {
        setError(response.data.message || 'Failed to update contributor');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    success,
    updateContributor,
  };
};

export default useContributor;
