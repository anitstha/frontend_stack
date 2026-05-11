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