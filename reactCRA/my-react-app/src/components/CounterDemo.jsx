import React, { useState } from "react";

function CounterDemo() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Counter Demo</h1>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default CounterDemo;
