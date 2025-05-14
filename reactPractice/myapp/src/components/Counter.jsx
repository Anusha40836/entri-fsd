import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState();
  return (
    <>
      <h1>Counter App</h1>
      <button onClick={() => setCounter(!counter)}>
        {counter ? "Hide" : "Show"}
      </button>

      {counter ? (
        <div>
          <h2>Count : {count} </h2>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      ) : (
        <p>click button to show app</p>
      )}
    </>
  );
}

export default Counter;
