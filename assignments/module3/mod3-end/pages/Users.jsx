import axios from "axios";
import { useEffect, useState } from "react";

export default function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => setUser(res.data))
      .catch((err) => console.log("Error fetching user data", err));
  }, []);
  return (
    <>
      <h2>👥 Users Page</h2>
      {user ? (
        <div>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ) : (
        <p>Loading Users....</p>
      )}
    </>
  );
}
