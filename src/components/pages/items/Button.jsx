import React from "react";
import { Button } from "react-bootstrap";

export default (props) => {
  return (
    <div>
      <button
        type=""
        className="sign_up_button_style"
        onClick={this.formOnClick}
      >
        {props.buttonName}
      </button>
    </div>
  );
};
