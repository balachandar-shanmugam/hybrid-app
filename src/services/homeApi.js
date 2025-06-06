
import axiosInstance from '../axiosConfig';

export const fetchHome = async () => {
  try {
    const response = await axiosInstance.get('/home');
    return response.data;
  } catch (error) {
        console.error('Home API failed:', error);
        throw error;
  }
};
