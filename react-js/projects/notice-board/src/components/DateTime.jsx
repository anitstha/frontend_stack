import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // update every 1 second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup
    return () => clearInterval(interval);
  }, []);

  // format date
  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "long",
    // year: "numeric",
    month: "long",
    day: "numeric",
  });

  // format time
  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="text-right">
      <h2 className="text-xl font-bold">{formattedDate}</h2>
      <h1 className="text-2xl text-pink-400 font-bold mt-2">{formattedTime}</h1>
    </div>
  );
};

export default DateTime;
