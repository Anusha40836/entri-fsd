import React, { useState } from "react";

export default function UseStateDemo() {
  const [name, setName] = useState("Adam");
  return (
    <>
      {/* <h1>Hello, {name}</h1> */}
      <h1>Data is from child using state</h1>
      <Child name={name} setName={setName} city="Bangalore" />

      {/* <button onClick={() => setName("Mark")}>Set Name</button> */}
    </>
  );
}

function Child(props) {
  return (
    <>
      <h1>Hello,{props.name}</h1>
      <button onClick={() => props.setName("Eve")}>Set Name</button>
      <h2>I am from {props.city}</h2>
    </>
  );
}
