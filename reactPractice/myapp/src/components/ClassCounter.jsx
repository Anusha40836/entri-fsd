import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <h1>Class Component Counter</h1>
        <h2>Count:{this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <h3>This Data is from props:{this.props.name}</h3>
      </>
    );
  }
}

ClassCounter.defaultProps = {
  name: "Shobha",
};
