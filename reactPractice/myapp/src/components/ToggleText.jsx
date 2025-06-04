import React, { useState } from "react";

function ToggleText() {
  const [message, setMessage] = useState(true);

  const handleMessage = () => {
    setMessage(!message);
  };
  return (
    <div>
      <h1>Toggle Demo:</h1>
      <button onClick={handleMessage}>
        {message ? "show message" : "hide message"}
      </button>
      {message && <p>Hello, React..!</p>}
    </div>
  );
}

export default ToggleText;
