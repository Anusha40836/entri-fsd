import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Controlled Form Input</h1>
      <label>
        Type your name:
        <input
          type="text"
          value={name}
          placeholder="Enter your name here.."
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p>Hello, {name}!</p>
      <button onClick={() => setName("")}>Clear</button>
    </div>
  );
}

export default NameForm;
