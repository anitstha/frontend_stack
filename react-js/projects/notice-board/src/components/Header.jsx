import React from "react";
import logo from "../assets/texaslogo.png";
import DateTime from "./DateTime";
import Weather from "./Weather";

const Header = () => {
  const schoolData = {
    logo: logo,
    name: "Texas International School",
    location: "Chabahel, Mitrapark",
  };

  return (
    <div className="flex items-center justify-between py-2 px-8 shadow">
        {/* school and name */}
      <div className="flex items-center gap-4">
        <img src={schoolData.logo} alt="logo" className="h-16" />

        <div>
          <h1 className="text-2xl font-bold">{schoolData.name}</h1>
          <p className="text-gray-500">{schoolData.location}</p>
        </div>
      </div>

      {/* date,time and weather */}
      <div className="flex items-center gap-4">
        <Weather />
        <DateTime />
      </div>
    </div>
  );
};

export default Header;
