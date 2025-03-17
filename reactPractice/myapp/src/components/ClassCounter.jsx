import React, { Component } from "react";

export default class classCounter extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        count: 0,
      });
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  handleReset = () => {
    this.setState({ count: (this.state.count = 0) });
  };
  render() {
    return (
      <div>
        <h1>I am a Class Component </h1>
        <h3>Count:{this.state.count}</h3>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
