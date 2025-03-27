import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComp({ title, text, image }) {
  const [showContent, setShowContent] = useState();
  return (
    <div className="container mt-4">
      <h2>Reusable Card Component</h2>
      <button
        className="btn btn-warning mb-3"
        onClick={() => setShowContent(!showContent)}
      >
        {showContent ? "Hide" : "show"}
      </button>

      {showContent ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
            {image && <img src={image} alt={title} className="card-img-top" />}
          </Card.Body>
        </Card>
      ) : (
        <p>Click button to show the content</p>
      )}
    </div>
  );
}

export default CardComp;
