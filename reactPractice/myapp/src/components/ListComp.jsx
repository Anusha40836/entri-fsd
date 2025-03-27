import React from "react";

function ListComp() {
  const users = [
    { id: 1, name: "Anusha", role: "Developer", age: 24 },
    { id: 2, name: "Jeevan", role: "Engineer", age: 32 },
    { id: 3, name: "Akash", role: "Analyst", age: 22 },
    { id: 4, name: "Shobha", role: "Admin", age: 46 },
  ];

  const usersList = users.map((eachItem, index) => (
    <li key={index}>
      {eachItem.name} is a/an {eachItem.role} with age {eachItem.age}
    </li>
  ));

  return (
    <>
      <h1>Rendering List</h1>
      <ol>{usersList}</ol>
    </>
  );
}

export default ListComp;
