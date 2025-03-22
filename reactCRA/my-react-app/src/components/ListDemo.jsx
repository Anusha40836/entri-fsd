import React from "react";

function ListDemo() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let listOfItems = numbers.map((eachItem) => <li>{eachItem}</li>);

  return (
    <>
      <h1>List Demo</h1>
      <ul>{listOfItems}</ul>
    </>
  );
}

export default ListDemo;
