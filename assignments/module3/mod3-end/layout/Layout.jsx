import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/users">Users</Link>
      </nav>
      <Outlet />
    </div>
  );
}
