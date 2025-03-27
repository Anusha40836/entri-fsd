import React, { useState } from "react";

function FormsDemo() {
  const [userName, setUsername] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    alert(userName);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        UserName:
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}

export default FormsDemo;
