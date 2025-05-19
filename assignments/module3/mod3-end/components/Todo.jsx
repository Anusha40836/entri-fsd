import React, { useState } from "react";

function Todo() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() !== " ") {
      setItems([...items, input]);
      setInput(" ");
    }
  };

  const removeItem = (indexToRemove) => {
    const updatedItems = items.filter((_, i) => i !== indexToRemove);
    setItems(updatedItems);
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Enter something.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
