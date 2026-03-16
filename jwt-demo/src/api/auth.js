import axios from "axios";

//base api url
const API_URL = "https://dummyjson.com/auth";

export const login = async (username, password) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password,
        });

        return response.data;  //includes jwt token
    } catch (error) {
        console.log(error);

    }
}

//function to get current user information
export const getCurrentUser = async () => {
    const token = localStorage.getItem("token");    

    const response = await axios.get(
        "https://dummyjson.com/auth/me",
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
    );

    return response.data;
};