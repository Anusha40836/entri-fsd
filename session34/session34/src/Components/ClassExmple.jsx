import { Component } from "react";

class ClassExmple extends Component {
  render() {
    return (
      <>
        <h1>Class Component</h1>
        <h2>
          Name and Place from props : {this.props.name} from {this.props.place}
        </h2>
      </>
    );
  }
}
export default ClassExmple;
