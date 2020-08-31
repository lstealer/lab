import React, { Component } from "react";

export default class ReportUs extends Component {
  render() {
    return (
      <div
        className="container"
        // style={{ display: this.props.item == "reportus" ? "" : "none" }}
        style={{ color: "red" }}
      >
        <div className="row">
          <h1>Report</h1>
        </div>
      </div>
    );
  }
}
