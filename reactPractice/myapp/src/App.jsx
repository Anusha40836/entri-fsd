import React from "react";
import List from "./components/List";
import ClassCounter from "./components/classCounter";
import FunctionCounter from "./components/FunctionCounter";
import ConditionalRendering from "./components/ConditionalRendering";
import FetchingData from "./components/FetchingData";

function App() {
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
    <div>
      {/* <List items={fruits} category="FRUITS" /> */}
      {/* <List items={vegetables} category="VEGETABLES" /> */}
      {/* <ClassCounter /> */}
      {/* <FunctionCounter name="Anshu" /> */}
      {/* <ConditionalRendering /> */}
      <FetchingData />
    </div>
  );
}

export default App;
