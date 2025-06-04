import React, { useEffect, useState } from "react";

function CounterEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed..");
  }, [count]);
  return (
    <>
      <h1>UseEffect with Counter:</h1>
      <h2>COUNT:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default CounterEffect;
