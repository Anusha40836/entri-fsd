import React, { useState, useEffect } from "react";
import axios from "axios";

function ContactManager() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 1. Read contacts
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setContacts(res.data))
      .catch((err) => console.error("Error fetching contacts", err));
  }, []);

  // 2. Create a new contact
  const addContact = () => {
    if (!name.trim() || !email.trim()) {
      alert("All fields are required...");
      return;
    }
    const newContact = {
      name,
      email,
    };

    axios
      .post("https://jsonplaceholder.typicode.com/users", newContact)
      .then((res) => {
        setContacts([res.data, ...contacts]);
        setName("");
        setEmail("");
      });
  };

  // 3. Delete a contact
  const deleteContact = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(() => {
        setContacts(contacts.filter((contact) => contact.id !== id));
      });
  };

  return (
    <div>
      <h2>📒 Contact Manager</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={addContact}>Add Contact</button>
      </form>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> ({contact.email})
            <button onClick={() => deleteContact(contact.id)}>🗑 Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactManager;
