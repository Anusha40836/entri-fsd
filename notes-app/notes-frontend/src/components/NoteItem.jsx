import React, { useState } from "react";
import axios from "axios";

export default function NoteItem({ note, token, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const save = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/notes/${note._id}`,
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onUpdate(res.data);
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  const remove = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${note._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onDelete(note._id);
    } catch (err) {
      console.error(err);
    }
  };

  if (editing) {
    return (
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={save}>Save</button>
        <button onClick={() => setEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div>
      <h4>{note.title}</h4>
      <p>{note.content}</p>
      <button onClick={() => setEditing(true)}>Edit</button>
      <button onClick={remove}>Delete</button>
    </div>
  );
}
