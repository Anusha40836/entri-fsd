import FetchUsers from "../components/FetchUsers";
import HomePage from "../components/HomePage";
import UserCard from "../components/UserCard";
import UserList from "../components/UserList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Users from "../pages/Users";
import Register from "../components/Register";
import Todo from "../components/Todo";
import Counter from "../components/Counter";
import API from "../components/API";
function App() {
  return (
    <>
      <HomePage />
      <h1>User Card:</h1>
      <UserCard name="Anusha" email="anu@example.com" status={true} />
      <UserList />
      <FetchUsers />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>

      <Register />
      <Todo />
      <Counter />
      <API />
    </>
  );
}

export default App;
