import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const [editId, setEditId] = useState(null);

  const API = "http://localhost:3000/tasks";

  const fetchTasks = async () => {
    try {
      const res = await axios.get(API);
      setTasks(res.data);
    } catch (error) {
      console.error("Error Fetching Tasks", error);
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API}/${editId}`, form);
      } else {
        await axios.post(API, form);
      }
      setForm({ title: "", description: "", completed: false });
      fetchTasks();
    } catch (error) {
      console.error("Error Submitting Form/Task", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      fetchTasks();
    } catch (error) {
      console.error("Error Deleting Task", error);
    }
  };

  const handleEdit = async (task) => {
    setForm({
      title: task.title,
      description: task.description,
      completed: task.completed,
    });
    setEditId(task.id);
  };
  return (
    <div>
      <h1>📃Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Enter Title..."
          value={form.title}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Enter Description..."
          onChange={handleChange}
          value={form.description}
          required
        />
        <label>
          <input
            type="checkbox"
            name="completed"
            onChange={handleChange}
            checked={form.completed}
          />{" "}
          Completed
        </label>
        <button type="submit">{editId ? "Update Task🖊️" : "Add Task➕"}</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <b>{task.title}</b> -{task.description} -
            {task.completed ? "✅Done" : "❌Not Done"}
            <button onClick={handleEdit(task)}>Edit✍️</button>
            <button onClick={handleDelete(task.id)}>Delete🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
