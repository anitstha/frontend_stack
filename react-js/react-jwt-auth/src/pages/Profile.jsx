import { useEffect, useState } from "react";
import api from "../utils/api";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get("/users/1");
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Profile Page</h1>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;