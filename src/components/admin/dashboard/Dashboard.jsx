import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <div
        className="container"
        // style={{ display: this.props.item == "dashboard" ? "" : "none" }}
        style={{ color: "red" }}
      >
        <div className="row">
          <h1>Dashboard</h1>
        </div>
      </div>
    );
  }
}
