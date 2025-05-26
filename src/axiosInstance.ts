// src/api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
//   baseURL: import.meta.env.BACKEND, // change this based on your backend
  baseURL: 'http://localhost:5000/api/v1', // change this based on your backend
  withCredentials: true, // important for sending cookies
});

// Request interceptor (optional for headers)
axiosInstance.interceptors.request.use(
  (config) => {
    // You can attach access token here if needed
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle 401
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If 401 error and not already retried
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes('/auth/refresh-token')
    ) {
      originalRequest._retry = true;
      try {
        // Call refresh token API
        await axiosInstance.get('/auth/refresh-token'); // this should set new access token in cookie
        return axiosInstance(originalRequest); // retry the original request
      } catch (err) {
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
