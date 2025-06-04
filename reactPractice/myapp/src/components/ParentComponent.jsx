import React, { useCallback, useState } from "react";
import ChidComponent from "./ChidComponent";
function ParentComponent() {
  const [count, setCount] = useState(0);

  // Memoized function using useCallback
  const handleGreet = useCallback(() => {
    alert("Hello from child");
  }, []);

  console.log("👩‍👧 ParentComponent rendered");
  return (
    <>
      <h3>I am the Parent Component</h3>
      <ChidComponent handleGreet={handleGreet} />
      <hr />
      <h2>Parent Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </>
  );
}

export default ParentComponent;
