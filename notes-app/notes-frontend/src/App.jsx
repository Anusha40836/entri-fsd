import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const onLogin = (user) => setUser(user);
  const onLogout = () => setUser(null);
  const onRegister = () => setShowRegister(false);

  if (!user) {
    return showRegister ? (
      <>
        <Register onRegister={onRegister} />
        <p>
          Already have an account?{" "}
          <button onClick={() => setShowRegister(false)}>Login</button>
        </p>
      </>
    ) : (
      <>
        <Login onLogin={onLogin} />
        <p>
          Don't have an account?{" "}
          <button onClick={() => setShowRegister(true)}>Register</button>
        </p>
      </>
    );
  }

  return <Dashboard user={user} onLogout={onLogout} />;
}
