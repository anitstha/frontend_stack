import React, { useEffect, useState } from "react";

export default function Weather() {
  const [weather, setWeather] = useState(null);

  const API_KEY = "5f5d3f4cc0f062c8a540003968fefa33";
  const CITY = "Kathmandu,Nepal";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`,
        );
        const data = await res.json();
        if (data.cod === 200) {
          setWeather(data);
        } else {
          console.error("Weather API Error:", data.message);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchWeather(); // initial fetch

    // Refresh every 10 minutes
    const interval = setInterval(fetchWeather, 600000);
    return () => clearInterval(interval);
  }, []);

  if (!weather) {
    return <div className="text-white">Loading weather... ⏳</div>;
  }

  // Capitalize description
  const description = weather.weather[0].description
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="flex items-center gap-3 p-4 rounded-lg w-fit">
      {/* Weather Info */}
      <div>
        <h2 className="text-xl font-bold">
          {Math.round(weather.main.temp)}°C 🌡️
        </h2>
        <p className="text-gray-500">{description}</p>
        <p className="text-sm text-gray-400">{weather.name}</p>
      </div>
    </div>
  );
}
