**Use a real mock authentication API: `dummyjson.com`**

Build a **React JWT Authentication App** using **DummyJSON API**.

Features:

Login Page
↓
Send login request to API
↓
Receive JWT token
↓
Save token in localStorage
↓
Protect Dashboard route
↓
Logout (remove token)


//valid credentials:

username: emilys
password: emilyspass


Codes:

Absolutely, Anit! 😄 Since you’re ready for a **full working JWT frontend setup**, I’ll give you all the **updated components and files** together, step by step, fully ready to copy-paste.

This setup includes:

* AuthContext
* ProtectedRoute
* Axios interceptor with JWT
* Login page
* Dashboard, Profile, Settings pages
* Navbar with dynamic links
* App.jsx routing

---

## 1️⃣ `src/utils/api.js` – Axios Instance with Interceptors

```javascript
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
  (error) => Promise.reject(error)
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
  }
);

export default api;
```

---

## 2️⃣ `src/context/AuthContext.jsx` – Global Auth State

```javascript
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
```

---

## 3️⃣ `src/components/ProtectedRoute.jsx` – Protect Pages

```javascript
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
```

---

## 4️⃣ `src/components/Navbar.jsx` – Dynamic Navbar

```javascript
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { token, logout } = useContext(AuthContext);

  return (
    <nav className="w-full bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="text-2xl font-bold">
        <Link to="/">MyApp</Link>
      </div>
      <div className="flex gap-4">
        {!token ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
            <button
              onClick={logout}
              className="bg-red-500 px-4 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
```

---

## 5️⃣ `src/pages/Login.jsx` – Login Page

```javascript
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
      const res = await api.post("/auth/login", credentials); 
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
```

---

## 6️⃣ `src/pages/Dashboard.jsx` – Dashboard Page

```javascript
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
```

---

## 7️⃣ `src/pages/Profile.jsx` – Profile Page

```javascript
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
```

---

## 8️⃣ `src/pages/Settings.jsx` – Settings Page

```javascript
import { useState } from "react";

const Settings = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Settings Page</h1>
      <p>Theme: {theme}</p>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Settings;
```

---

## 9️⃣ `src/App.jsx` – Main App with Routing

```javascript
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

---

## 10️⃣ `src/pages/Home.jsx` – Simple Home Page

```javascript
const Home = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center text-4xl">
      Welcome to MyApp
    </div>
  );
};

export default Home;
```

---

## ✅ `main.jsx` – Wrap App with AuthProvider

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

With this setup, you now have a **fully functional JWT frontend app**:

* Login / Logout
* Protected routes
* Axios automatically sends JWT
* Dynamic Navbar
* Multiple protected pages
* Fetching real data
