import { useEffect, useState, useContext } from "react";
import api from "../utils/api";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/users/1");
        setUserData(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl">Welcome To Dashboard</h1>
      {userData && (
        <div className="bg-gray-800 p-4 rounded-md mt-4">
          <h2 className="text-2xl">User Info:</h2>
          <p>Name: {userData.firstName} {userData.lastName}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
      <button
        onClick={logout}
        className="mt-4 py-2 px-6 bg-red-500 rounded-full hover:bg-red-600 transition-all"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;