import React, { Component } from "react";

export default class User extends Component {
  render() {
    return (
      <div
        className="container"
        // style={{ display: this.props.item == "user" ? "" : "none" }}
        style={{ color: "red" }}
      >
        <div className="row">
          <p>
            <img
              src="/image/content.png"
              width="30px"
              style={{ marginTop: "-7px", padding: "3px 0" }}
            />{" "}
            អត្ថបទ
          </p>{" "}
        </div>
      </div>
    );
  }
}
