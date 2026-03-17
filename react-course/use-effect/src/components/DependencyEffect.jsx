import { useEffect, useState } from "react";

const DependencyEffect = () => {
  const [increment, setIncrement] = useState(0);
  const [decrement, setDecrement] = useState(0);

  useEffect(() => {
    console.log("Component Renders on Increment");
  }, [increment]);

  useEffect(() => {
    console.log("Component Renders on Decrement");
  }, [decrement]);

  return (
    <div>
      <h1>Increment: {increment}</h1>
      <button onClick={() => setIncrement(increment + 1)}>Increment</button>

      <h1>Decrement: {decrement}</h1>
      <button onClick={() => setDecrement(decrement - 1)}>Decrement</button>
    </div>
  );
};

export default DependencyEffect;
