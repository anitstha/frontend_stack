import { useEffect, useState } from "react";

const BasicEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Re-rendered on each change!");
  });
  
  useEffect(() => {
    console.log("Component Rendered Once!");
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default BasicEffect;
