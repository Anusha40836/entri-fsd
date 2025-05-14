import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import List from "./components/List";
import ClassCounter from "./components/classCounter";
import FunctionCounter from "./components/FunctionCounter";
import ConditionalRendering from "./components/ConditionalRendering";
import FetchingData from "./components/FetchingData";
import ParentComp from "./components/ParentComp";
import ListComp from "./components/ListComp";
import UseStateDemo from "./components/UseStateDemo";
import CoditionRend from "./components/CoditionRend";
import OnClickEvent from "./components/OnClickEvent";
import CssDemo from "./components/CssDemo";
import FormsDemo from "./components/FormsDemo";
import Counter from "./components/Counter";
import Carousels from "./components/Carousels";

function App() {
  function greeting() {
    return "Hello, I am a function passed as a prop";
  }
  const fruits = [
    { id: 1, name: "apple", color: "red", cost: 120 },
    { id: 2, name: "dates", color: "brown", cost: 350 },
    { id: 3, name: "banana", color: "yellow", cost: 100 },
    { id: 4, name: "grapes", color: "green", color: 250 },
  ];

  const vegetables = [
    { id: 1, name: "carrot", color: "red", cost: 120 },
    { id: 2, name: "okra", color: "brown", cost: 350 },
    { id: 3, name: "raddish", color: "yellow", cost: 100 },
    { id: 4, name: "beans", color: "green", cost: 250 },
  ];
  return (
    <>
      {/* <List items={fruits} category="FRUITS" /> */}
      {/* <List items={vegetables} category="VEGETABLES" /> */}
      {/* <ClassCounter /> */}
      {/* <FunctionCounter name="Anshu" /> */}
      {/* <ConditionalRendering /> */}
      {/* <FetchingData /> */}
      {/* <ParentComp name="Adam" age={25} greetings={greeting} /> */}
      {/* <ListComp /> */}
      {/* <UseStateDemo /> */}
      {/* <CoditionRend name="Anu" user={true} /> */}
      {/* <OnClickEvent /> */}
      {/* <CssDemo /> */}
      {/* <FormsDemo /> */}
      {/* <Counter /> */}
      <Carousels />
    </>
  );
}

export default App;
