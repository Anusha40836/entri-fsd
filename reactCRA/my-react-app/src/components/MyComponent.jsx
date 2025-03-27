import React, { useState } from "react";

function MyComponent() {
  let [name, setName] = useState("Guest");

  function updateName() {
    setName("Anusha");
    // name = "Anusha";
  }
  return (
    <>
      <h1>useState Demo</h1>
      <p>Name:{name}</p>
      <button onClick={updateName}>Set Name</button>
    </>
  );
}

export default MyComponent;
