import React from "react";

function OnClickEvent() {
  function handleClick(event) {
    console.log("Hello World!");
    console.log(event);
  }
  return (
    <>
      <h1>OnClick Event</h1>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default OnClickEvent;
