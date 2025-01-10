import { useState } from 'react';
import axios from 'axios';
import { IMainteiner } from '@/store/types';

// interface MaintainerResponse {
//   success: boolean;
//   message: string;
//   data?: {
//     _id: string;
//     maintainerId: string;
//     termsAccepted: boolean;
//     termsAcceptedAt: string;
//   };
//   error?: string;
// }

const API_BASE_URL = 'https://ethopensource.onrender.com'; // Replace with your backend API URL


const useMaintainer = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Function to update or onboard a maintainer
  const updateMaintainer = async (data:IMainteiner): Promise<void> => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      const token = localStorage.getItem('token'); // Retrieve the JWT token from localStorage
      if (!token) {
        throw new Error('User is not authenticated');
      }

      const response: any = await axios.post(
        `${API_BASE_URL}/maintainer/update-maintainer`,
        { data},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response)
      if (response.data.success) {
        setSuccess(response.data.message);
      } else {
        setError(response.data.message || 'Failed to update maintainer');
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
    updateMaintainer,
  };
};

export default useMaintainer;
