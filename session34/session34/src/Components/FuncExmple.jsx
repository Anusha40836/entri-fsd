import React from "react";

function FuncExmple(props) {
  return (
    <>
      <h1>Functional Component</h1>
      <h2>
        Name and Place from props: {props.name} from {props.place}
      </h2>
    </>
  );
}

export default FuncExmple;
