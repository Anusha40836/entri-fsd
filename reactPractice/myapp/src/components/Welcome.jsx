import React, { useState } from "react";

function Welcome({ name, isLogin }) {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <h1>Props & Conditional Rendering</h1>
      <h2>Welcome {name}..!</h2>
      {login ? (
        <>
          <h3>`Hey {name}, Welcome back..!`</h3>
          <button
            onClick={() => {
              setLogin(!login);
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h3>`Oh no!...{name}, please login`</h3>
          <button
            onClick={() => {
              setLogin(!login);
            }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default Welcome;
