import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});


// REQUEST INTERCEPTOR 
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// RESPONSE INTERCEPTOR (when token expires logout automatically)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    if (error.response && error.response.status === 401) {
      console.log("Token expired or invalid");

      // remove token
      localStorage.removeItem("token");

      // redirect to login
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;