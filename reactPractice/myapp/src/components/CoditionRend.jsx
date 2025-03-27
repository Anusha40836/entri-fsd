import React from "react";

function CoditionRend(props) {
  const { user, name } = props;

  const newEmails = 3;

  //   if (user) {
  //     return <button>Logout</button>;
  //   }
  //   return <button>Login</button>;
  return (
    <>
      <h1>Hey, {name}</h1>
      {newEmails > 0 && <h3>You have {newEmails} new mails in your inbox.</h3>}
      {user ? <button>Logout</button> : <button>Login</button>}
    </>
  );
}

export default CoditionRend;
