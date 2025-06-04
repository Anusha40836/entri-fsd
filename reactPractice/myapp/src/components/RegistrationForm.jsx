import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("All fields are required...");
    }

    alert(username);
    console.log({ username, email, password });
  };
  return (
    <>
      <h1> Small Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username... "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />

        <input
          type="email"
          placeholder="Enter email... "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <input
          type="password"
          placeholder="Enter password... "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default RegistrationForm;
