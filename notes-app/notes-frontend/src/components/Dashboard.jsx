import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

export default function Dashboard({ user, onLogout }) {
  const [notes, setNotes] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/notes", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotes(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addNote = (newNote) => setNotes([newNote, ...notes]);

  const updateNote = (updated) => {
    setNotes(notes.map((n) => (n._id === updated._id ? updated : n)));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n._id !== id));
  };

  const logout = () => {
    localStorage.removeItem("token");
    onLogout();
  };

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <button onClick={logout}>Logout</button>
      <AddNote token={token} onAdd={addNote} />
      <div>
        {notes.length === 0 ? (
          <p>No notes yet</p>
        ) : (
          notes.map((note) => (
            <NoteItem
              key={note._id}
              note={note}
              token={token}
              onUpdate={updateNote}
              onDelete={deleteNote}
            />
          ))
        )}
      </div>
    </div>
  );
}
