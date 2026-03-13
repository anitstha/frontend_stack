import api from "../api/axios";
import { useEffect, useState } from "react";

const Dashboard = () => {

  const [data, setData] = useState(null);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/profile");
        setData(res.data);
      } catch (error) {

        // If token expired or invalid
        if (error.response?.status === 401) {
          logout();
        } else {
          console.log("Error fetching profile");
        }

      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>

      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;