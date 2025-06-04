import React from "react";

function List() {
  const fruits = [
    { name: "apple", color: "red" },
    { name: "orange", color: "amber" },
    { name: "mango", color: "green" },
    { name: "banana", color: "yellow" },
  ];
  return (
    <div>
      <h1>List App</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {fruit.name}:{fruit.color}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
