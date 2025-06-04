import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { name } = useParams();
  return (
    <>
      <h2>Dynamic Route using UseParams:</h2>
      <h3>Hello, {name}..!</h3>
    </>
  );
}

export default User;
