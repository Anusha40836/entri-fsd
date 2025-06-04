import React, { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required..!");
      return;
    }
    setError("");
    alert("Logged in succesfully..!");
  };

  return (
    <div>
      <h1>Login Form</h1>
      {error ? <p>{error}</p> : null}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email.."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
