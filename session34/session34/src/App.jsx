import React from "react";
import Counter from "./Components/Counter";
import ConditionalRendering from "./Components/ConditionalRendering";
import ClassExmple from "./Components/classExmple";
import FuncExmple from "./Components/FuncExmple";
import Card from "./Components/Card";
import List from "./Components/List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calorie: 15 },
    { id: 2, name: "Dates", calorie: 35 },
    { id: 3, name: "Raisin", calorie: 55 },
    { id: 4, name: "Cashew", calorie: 75 },
    { id: 5, name: "Almond", calorie: 95 },
  ];
  const vegetables = [
    { id: 1, name: "Carrot", calorie: 25 },
    { id: 2, name: "Onion", calorie: 45 },
    { id: 3, name: "Tomato", calorie: 65 },
    { id: 4, name: "Potato", calorie: 85 },
    { id: 5, name: "Beetroot", calorie: 105 },
  ];
  return (
    <>
      {fruits.length > 0 && <List items={fruits} category="Fruits" />}
      {vegetables.length > 0 && (
        <List items={vegetables} category="Vegetables" />
      )}
    </>
  );
}

export default App;
