//simple example of useContext Hook

// import { createContext } from "react"
// import Child from "./components/Child";

// export const userContext = createContext();

// const App = () => {
//   const user = { name: "Anit Shrestha", role: "SuperAdmin" }

//   return (
//     <userContext.Provider value={user}>
//       <Child />
//     </userContext.Provider>
//   )
// }

// export default App


// Authentication example with useContext Hook

// import { AuthProvider } from './auth-eg/AuthContext';
// import Navbar from './auth-eg/Navbar';
// import Dashboard from './auth-eg/Dashboard';

// function App() {
//   return (
//     <AuthProvider>
//       <Navbar />
//       <Dashboard />
//     </AuthProvider>
//   );
// }

// export default App;



//Theme Toogle using useContext

import { createContext, useContext, useState } from "react"
import Home from "./theme-toogle/Home";

export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Home />
    </ThemeContext.Provider>
  )
}

export default App

















