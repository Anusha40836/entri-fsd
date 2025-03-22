import React from "react";

function List(props) {
  const { items, category } = props;
  const listItems = items.map((eachItem) => (
    <li key={eachItem.id}>
      {eachItem.name}:{eachItem.color}:{eachItem.cost}
    </li>
  ));
  return (
    <>
      <h1>{category}</h1>
      <ol>{listItems}</ol>
    </>
  );
}

export default List;
