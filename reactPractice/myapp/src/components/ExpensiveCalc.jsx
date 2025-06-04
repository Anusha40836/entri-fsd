import React, { useState, useMemo } from "react";
//useMemo is used to optimize performance by caching the result of a costly calculation and only recalculating it when dependencies change.

//In React, when you pass a function as a prop to a child component, it gets re-created on every re-render.
//This can cause unnecessary renders of child components, especially if they’re optimized with React.memo.

//useCallback helps memoize the function, so it stays the same between renders — unless its dependencies change.
function ExpensiveCalc() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const slowSquare = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1e8; i++) {} // simulate delay
    return num * num;
  };

  const squared = useMemo(() => slowSquare(number), [number]);

  return (
    <div>
      <h1>useMemo Demo</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Squared Value: {squared}</p>
      <button onClick={() => setCounter(counter + 1)}>
        Re-render ({counter})
      </button>
    </div>
  );
}

export default ExpensiveCalc;
