import React, { useState } from "react";

function ConditionalRendering() {
  const [login, setLogin] = useState();

  function handleLogin() {
    setLogin(true);
  }

  function handleLogout() {
    setLogin(false);
  }
  //Using Logical && Operator
  return (
    <>
      {login && (
        <>
          <h1>Welcome, User</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
      {!login && (
        <>
          <h1>Please Login</h1>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </>
  );

  //Using Ternary Operators

  //   return (
  //     <>
  //       {login ? (
  //         <>
  //           <h1>Welcome, User</h1>
  //           <button onClick={handleLogout}>Logout</button>
  //         </>
  //       ) : (
  //         <>
  //           <h1>Please Login</h1>
  //           <button onClick={handleLogin}>Login</button>
  //         </>
  //       )}
  //       ;
  //     </>
  //   );

  //Using an If...Else Statement

  //   if (login) {
  //     return (
  //       <>
  //         <h1>Welcome, User</h1>;<button onClick={handleLogout}>Logout</button>;
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <h1>Please Login</h1>;<button onClick={handleLogin}>Login</button>
  //       </>
  //     );
  //   }
}

export default ConditionalRendering;
