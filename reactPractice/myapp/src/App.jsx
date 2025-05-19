import React from "react";

export default function App() {
  return <div>Hello Kids</div>;
}

import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <App />
        Hey Anusha
      </div>
    );
  }
}
