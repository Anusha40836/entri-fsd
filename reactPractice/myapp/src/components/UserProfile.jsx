import React, { useContext } from "react";
import { UserContext } from "./UserContext";
function UserProfile() {
  const user = useContext(UserContext);
  return (
    <>
      <h2>User Profile</h2>
      <p>
        <b>Name:</b>
        {user.name}
      </p>
      <p>
        <b>Role:</b>
        {user.role}
      </p>
    </>
  );
}

export default UserProfile;
