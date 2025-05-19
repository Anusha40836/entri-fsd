import React, { useState } from "react";
import UserCard from "./UserCard";

function UserList() {
  const initialUsers = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      status: false,
    },
    { id: 2, name: "Bob Smith", email: "bob@example.com", status: true },
    {
      id: 3,
      name: "Charlie Lee",
      email: "charlie@example.com",
      status: false,
    },
  ];
  const [users, setUsers] = useState(initialUsers);

  const handleRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <>
      <h1>Users List</h1>
      {users.map((user) => (
        <div key={user.id}>
          <UserCard name={user.name} email={user.email} status={user.status} />
          <button onClick={() => handleRemove(user.id)}>Remove</button>
        </div>
      ))}
    </>
  );
}

export default UserList;
