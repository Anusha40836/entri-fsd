import React, { useEffect, useState } from "react";
function FunctionCounter() {
  let [count, setCount] = useState(0);
  //   useEffect(() => {
  //     document.title = `count is ${count}`;
  //     alert("Re-rendering");
  //   });
  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>I am a Functional Component</h1>
      <h3>Count:{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button
        onClick={() => {
          setCount((count = 0));
        }}
      >
        Reset
      </button>
    </div>
  );
}
export default FunctionCounter;
