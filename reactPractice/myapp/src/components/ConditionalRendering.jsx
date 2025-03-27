import React, { useState } from "react";

function ConditionalRendering() {
  const [login, setLogin] = useState(true);

  function toggleStatus() {
    setLogin(!login);
  }

  // function handleLogin() {
  //   setLogin(true);
  // }

  // function handleLogout() {
  //   setLogin(false);
  // }

  //Using Toggle
  return (
    <>
      <h1>Change UI based on Click</h1>
      {login && <p>This paragraph will be show/hidden on click</p>}
      <button onClick={toggleStatus}>
        {login ? "Welcome" : "Please Login"}
      </button>
    </>
  );

  //Using Logical && Operator
  // return (
  //   <>
  //     {login && (
  //       <>
  //         <h1>Welcome, User</h1>
  //         <button onClick={handleLogout}>Logout</button>
  //       </>
  //     )}
  //     {!login && (
  //       <>
  //         <h1>Please Login</h1>
  //         <button onClick={handleLogin}>Login</button>
  //       </>
  //     )}
  //   </>
  // );

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
