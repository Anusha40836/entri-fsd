import React from "react";

function StyledComponent() {
  const myStyle = { color: "green" };
  return (
    <>
      <div className="box">
        I'm Styled....!
        <h1>Koganti</h1>
      </div>
      <h2 style={myStyle}> RoohiAnshu </h2>
    </>
  );
}

export default StyledComponent;
