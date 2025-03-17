import React from "react";

function Card(props) {
  return (
    <div>
      <h1>Contact Info:</h1>
      <h3>Name: {props.name}</h3>
      <h3>Designation: {props.desg}</h3>
      <h3>Phone: {props.phno}</h3>
      <h3>Email:{props.email}</h3>
    </div>
  );
}

export default Card;
