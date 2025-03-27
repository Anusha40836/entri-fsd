import React from "react";

function Card(props) {
  const { title, content } = props;
  return (
    <>
      <h1>Title:{title}</h1>
      <h2>Content:{content}</h2>
      <img
        src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=1024x1024&w=is&k=20&c=NQtm4v1Uzp2luv-6f3qORcq9pDtz2H56p8g9Xix8cY0="
        alt="image"
      ></img>
    </>
  );
}

export default Card;
