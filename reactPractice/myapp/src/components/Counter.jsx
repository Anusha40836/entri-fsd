import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter App</h1>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Counter;
