import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("login sucessfull");

    try {
      const res = await api.post("/auth/sup-admin/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
