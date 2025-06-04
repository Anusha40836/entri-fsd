import React, { useEffect, useState } from "react";

function Logger() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    //This code runs only once, when the component mounts
    // console.log("Component mounted");
    console.log(`count changed to : ${count}`);
    //The empty array [] means - "Run this effect only once (on mount), and never again."
  }, [name]); //only runs when 'count' changes

  return (
    <>
      <h1>Logger</h1>
      <h2>Check the console!</h2>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <input
        type="text"
        value={name}
        placeholder="Change name.."
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default Logger;
