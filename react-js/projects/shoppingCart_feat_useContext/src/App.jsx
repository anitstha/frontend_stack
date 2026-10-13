import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Cart />
    </div>
  );
};

export default App;
