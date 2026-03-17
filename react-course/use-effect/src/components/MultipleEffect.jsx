import { useState, useEffect } from "react";

const MultipleEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Effect 1 → Runs only once (Component Mount)
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // Effect 2 → Runs when count changes
  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);

  // Effect 3 → Runs when name changes
  useEffect(() => {
    console.log("Name Updated:", name);
  }, [name]);

  return (
    <div className="p-5">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default MultipleEffect;