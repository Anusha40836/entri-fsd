import React from "react";

function ConditionalRenderDemo() {
  const isLoggedIn = true;
  let message;

  let name = "Anusha";
  let age = 14;

  if (true) {
    message = "Love You";
  } else {
    message = "Hate You";
  }
  return (
    <>
      {isLoggedIn ? <h1>Welcome Back</h1> : <h1>please login</h1>}
      <h1>{message}</h1>
      <hr />
      <h1>{name}'s Profile:</h1>
      <h2>
        {name}'s Age is {age}
      </h2>
      {/* {age > 18 ? `${name} is a Major` : `${name} is a Minor`} */}
      {age >= 18 ? (
        <h3 className="major">{name} is Major</h3>
      ) : (
        <h3 className="minor">{name} is Minor</h3>
      )}
    </>
  );
}

export default ConditionalRenderDemo;
