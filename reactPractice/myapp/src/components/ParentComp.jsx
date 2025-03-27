import React from "react";

export default function ParentComp(props) {
  function sum(a, b) {
    return a + b;
  }
  return (
    <>
      <h1>I am a Parent Component</h1>
      <h2>
        Hi, I am {props.name} and my age is {props.age}
      </h2>
      <h3>{props.greetings()}</h3>
      <ChildComp1 firstName="Koganti" lastName="Anusha" />
      <ChildComp2 result={sum} />
      <ChildComp3 hobbies={["coding,  ", " music."]} />
    </>
  );
}

function ChildComp1(props) {
  return (
    <>
      <h2>I am Child1</h2>
      <h3>
        My First Name is {props.firstName} and Last Name is {props.lastName}
      </h3>
    </>
  );
}

function ChildComp2(props) {
  return (
    <>
      <h2>I am Child2</h2>
      <h3>The sum of 2 and 3 is : {props.result(2, 3)}</h3>
    </>
  );
}

function ChildComp3(props) {
  return (
    <>
      <h2>I am Child3</h2>
      <h3>My hobbies are : {props.hobbies}</h3>
    </>
  );
}
