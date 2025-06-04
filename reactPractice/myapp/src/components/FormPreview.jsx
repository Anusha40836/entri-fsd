import React, { useEffect, useState } from "react";

function FormPreview() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Running...");
    }, 1000);
    setIntervalId(id);
    return () => {
      clearInterval(id);
      console.log("Cleaned up");
    };
  }, []);

  return (
    <div>
      <button onClick={() => clearInterval(intervalId)}>Stop Inteval</button>
      <h1>Live Form Review</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={email}
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <h2>Preview:</h2>
      <p>👤 {name || "Name will appear here"}</p>
      <p>📧 {email || "Email will appear here"}</p>
    </div>
  );
}

export default FormPreview;
