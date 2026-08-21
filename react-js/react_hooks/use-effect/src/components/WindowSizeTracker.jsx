import React, { useEffect, useState } from "react";

const WindowSizeTracker = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Windows Width = {width} px</h1>
    </div>
  );
};

export default WindowSizeTracker;
