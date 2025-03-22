import React from "react";

export default function FuncCompDemo(props) {
  const { name, age, place } = props;
  return (
    <>
      <h1>
        Hello👋, {name}, You are {age} year's old😁 from {place}🏡.
      </h1>
    </>
  );
}
