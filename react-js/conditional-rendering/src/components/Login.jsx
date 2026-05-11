import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    if (credentials.username === "anit" && credentials.password === "heyanit") {
      navigate("/home");
    } else {
      alert("Invalid username or password!");
    }

    //reset form
    setCredentials({
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <h1>Login to continue..</h1>
      <form className="form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button className="btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
