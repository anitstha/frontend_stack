import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black/80 py-6 px-60 text-2xl font-bold text-gray-100 flex items-center justify-between">
      <Link to="/" className="hover:text-green-500 transition-all">Movie Explorer</Link>
      <Link to="/" className="hover:text-green-500 transition-all">Home</Link>
    </div>
  );
};

export default Navbar;
