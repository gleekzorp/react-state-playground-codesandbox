import React, { Component } from "react";

export default class ShowHide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayOn: true
    };

    this.toggleOn = this.toggleOn.bind(this);
  }

  toggleOn() {
    this.setState({
      displayOn: !this.state.displayOn
    });
  }

  render() {
    return (
      <div>
        <h1>Show And Hide</h1>
        <button onClick={this.toggleOn}>
          {this.state.displayOn ? "Hide" : "Show"}
        </button>
        <h1 style={{ display: this.state.displayOn ? "block" : "none" }}>
          Hello
        </h1>
      </div>
    );
  }
}
