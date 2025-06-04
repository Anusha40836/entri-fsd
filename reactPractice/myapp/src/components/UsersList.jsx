import React, { useEffect, useState } from "react";

function UsersList() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setusers(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}:{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
