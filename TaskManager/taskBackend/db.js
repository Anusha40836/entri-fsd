import mysql from "mysql2/promise";

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Roohianshu@2128",
  database: "task_manager_DB",
});

export async function getAllTasks() {
  const [result1] = await connection.query("SELECT * FROM tasks");
  return result1;
}

export async function getTaskById(id) {
  const [result2] = await connection.query("SELECT * FROM tasks WHERE id=?", [
    id,
  ]);
  return result2;
}

export async function addTask(title, description, completed) {
  const result3 = await connection.query(
    "INSERT INTO tasks (title,description,completed) VALUES (?,?,?)",
    [title, description, completed]
  );
  return result3;
}

export async function deleteTask(id) {
  const result4 = await connection.query("DELETE FROM tasks WHERE id=?", [id]);
  return result4;
}

export async function updateTask(title, description, completed, id) {
  const result5 = await connection.query(
    "UPDATE tasks SET title=?,description=?,completed=? WHERE id=?",
    [title, description, completed, id]
  );
  return result5;
}
