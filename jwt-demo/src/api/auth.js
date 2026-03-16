import axios from "axios";

const API_URL = "https://dummyjson.com/auth";

// login function
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      username,
      password,
    });
    return response.data; // includes accessToken
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// get current user data
export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get(`${API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
};