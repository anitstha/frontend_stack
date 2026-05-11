import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../utils/api";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Replace with your API endpoint
      const res = await api.post("/auth/sup-admin/login", credentials); 
      login(res.data.token); // save token in AuthContext
      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials or API error!");
      console.error(error);
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="h-66 w-80 bg-gray-200 p-8 flex flex-col gap-4 rounded-3xl"
      >
        <h1>Login to continue..</h1>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="border py-2 px-4 rounded-full outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="border py-2 px-4 rounded-full outline-none"
        />
        <button
          type="submit"
          className="mt-4 py-2 px-8 bg-blue-500 text-white shadow-2xl rounded-full hover:bg-blue-600 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;