import React from "react";

function ChidComponent({ handleGreet }) {
  console.log("👶 ChildComponent rendered");
  return (
    <>
      <h3>I am the Child Component</h3>
      <button onClick={handleGreet}>Say Hello</button>
    </>
  );
}
// Use React.memo to prevent re-renders if props don't change
export default React.memo(ChidComponent);
