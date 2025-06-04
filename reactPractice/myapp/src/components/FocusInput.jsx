import React, { useEffect, useRef, useState } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const previous = useRef(0);
  //useRef stores a value without triggering re-renders — perfect for tracking previous state or timestamps.

  useEffect(() => {
    previous.current = count;
  }, [count]);

  const handleFocus = () => {
    inputRef.current.focus(); // Directly focuses the input field
    //This shows how useRef can replace document.getElementById() for DOM access in React.
  };
  return (
    <div>
      <h1>useRef for DOM Access</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="click below button to focus"
      />
      <button onClick={handleFocus}>Focus Input</button>
      <h1>Current:{count}</h1>
      <h2>Previous:{previous.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default FocusInput;
