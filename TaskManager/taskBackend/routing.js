import express from "express";
import cors from "cors";
import {
  getAllTasks,
  getTaskById,
  addTask,
  deleteTask,
  updateTask,
} from "./db.js";
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello, Welcome to Task Manager Home Page</h1>");
});

app.get("/tasks", async (req, res) => {
  try {
    const output1 = await getAllTasks();
    res.status(200).json(output1);
  } catch (error) {
    console.error("Error Fetching Tasks", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const output2 = await getTaskById(id);
    res.status(200).json(output2);
  } catch (error) {
    console.error("Error Fetching Task By Id", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/tasks", async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const output3 = await addTask(title, description, completed);
    res.status(201).json({ message: "Task Created" });
  } catch (error) {
    console.error("Error Adding Task", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const output4 = await deleteTask(id);
    res.status(200).json({ message: "Task Deleted" });
  } catch (error) {
    console.error("Error Deleting Task", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.put("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description, completed } = req.body;
  try {
    const output5 = await updateTask(title, description, completed, id);
    res.status(200).json({ message: "Task Updated Successfully" });
  } catch (error) {
    console.error("Error Updating Task", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4000, () => {
  console.log("server is listening on http://localhost:4000");
});
