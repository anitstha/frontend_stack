import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: "https://dummyjson.com", // replace with your API if needed
});

// Request interceptor - attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor - handle 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login"; // redirect to login
    }
    return Promise.reject(error);
  },
);

export default api;
