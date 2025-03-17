import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onDecrement = () => {
    setCount(count - 1);
  };

  const onReset = () => {
    setCount((count = 0));
  };

  return (
    <>
      <h2>{count}</h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

export default Counter;
