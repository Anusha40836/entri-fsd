import React, { useEffect, useState } from "react";
import axios from "axios";
function FetchUsers() {
  const [count, setCount] = useState(0);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log("Error fetching users", err));
  }, []);
  return (
    <>
      <h1>Counter:</h1>
      <h3>COUNT:{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>➕</button>
      <button onClick={() => setCount(count - 1)}>➖</button>
      <button onClick={() => setCount(0)}>🔃</button>

      <h1>Fetched Users using axios:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - <em>{user.email}</em>
          </li>
        ))}
      </ul>
    </>
  );
}

export default FetchUsers;
