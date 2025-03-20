import React from "react";

function List(props) {
  const itemsList = props.items;

  const listItems = itemsList.map((eachItem) => (
    <li key={eachItem.id}>
      {eachItem.name}:{eachItem.color}:{eachItem.cost}
    </li>
  ));
  return (
    <div>
      <ol>{listItems}</ol>
    </div>
  );
}

export default List;
