import React, { useState } from "react";

function NameList() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleAdd = () => {
    if (name.trim() === "") return alert("name field is empty");
    setNames([...names, name]);
    setName("");
  };

  const handleDelete = (indexToDelete) => {
    const updatedNames = names.filter((_, i) => i !== indexToDelete);
    setNames(updatedNames);
  };
  return (
    <>
      <h1>Name List</h1>
      <input
        type="text"
        placeholder="Enter name.."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      {names.length === 0 ? (
        <p>No names found..</p>
      ) : (
        <>
          <ul>
            {names.map((name, index) => (
              <li key={index}>
                {name}
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default NameList;
