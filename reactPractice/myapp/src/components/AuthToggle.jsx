import React, { useState } from "react";

function AuthToggle() {
  const [login, setLogin] = useState(false);

  const handleAuth = () => {
    setLogin(!login);
  };
  return (
    <div>
      {login ? (
        <>
          <h1>Welcome...!</h1>
          <button onClick={handleAuth}>Logout</button>
        </>
      ) : (
        <>
          <h1>Please login...</h1>
          <button onClick={handleAuth}>Login</button>
        </>
      )}
    </div>
  );
}

export default AuthToggle;
