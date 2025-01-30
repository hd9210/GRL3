import axios from "axios";

// Use the VITE_API_BASE_URL from environment variables
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api",  // Ensure it's the correct base URL
});

// Add Authorization header automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");  // Use the correct localStorage key
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
