import React from "react";

function CardDemo(props) {
  const { name, job, city } = props;
  return (
    <div className="card-container">
      <h1>Card Details:</h1>
      <h2>Name: {name}</h2>
      <h2>Job: {job}</h2>
      <h2>City: {city}</h2>
    </div>
  );
}

export default CardDemo;
