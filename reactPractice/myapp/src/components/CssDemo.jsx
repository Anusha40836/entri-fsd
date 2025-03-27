import React from "react";

const myStyle = { color: "green", textAlign: "center" };

function CssDemo() {
  return (
    <>
      <h1 style={myStyle}>Hello, Anusha</h1>
      <h2 style={{ ...myStyle, backgroundColor: "burlywood" }}>How are you?</h2>
    </>
  );
}

export default CssDemo;
