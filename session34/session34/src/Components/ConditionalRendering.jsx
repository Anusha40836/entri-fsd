import React, { useState } from "react";

function ConditionalRendering() {
  const [login, setLogin] = useState();

  const handleLogin = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  if (login) {
    return (
      <>
        <h2>Hello User, Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </>
    );
  } else {
    return (
      <>
        <h2>Hey User, Please Login</h2>
        <button onClick={handleLogin}>Login</button>
      </>
    );
  }
}

export default ConditionalRendering;
