import React, { Component } from "react";

class Scroll extends Component {
  state = {};
  render() {
    console.log(this.props.children);
    return (
      <div
        style={{
          overflow: "scroll",
          border: "5px solid black",
          height: "800px"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
