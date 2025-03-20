import React, { useState } from "react";

function FunctionCounter(props) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>Functional Component Counter</h1>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <h3>This Data is from props:{props.name} </h3>
    </>
  );
}

FunctionCounter.defaultProps = {
  name: "Amarnath",
};
export default FunctionCounter;
