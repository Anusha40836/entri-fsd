import React, { useRef } from "react";

function ClearFocusInput() {
  const inputRef = useRef();
  const handleClearFocus = () => {
    inputRef.current.focus();
    inputRef.current.value = " ";
  };

  return (
    <>
      <h1>Clear and Focus Input using useRef:</h1>
      <input type="text" ref={inputRef} placeholder="Enter something..." />
      <button onClick={handleClearFocus}>click</button>
    </>
  );
}

export default ClearFocusInput;
