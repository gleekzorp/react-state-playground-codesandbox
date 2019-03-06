import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();

    this.state = {
      handleNumber: 0
    };
    this.numberChange = this.numberChange.bind(this);
  }

  numberChange(arg) {
    this.setState({
      handleNumber: this.state.handleNumber + arg
    });
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <div>{this.state.handleNumber}</div>
        <button onClick={() => this.numberChange(1)}>Up</button>
        <button onClick={() => this.numberChange(-1)}>Down</button>
      </div>
    );
  }
}
