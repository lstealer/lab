import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Report.css";
import Axios from "axios";
var CryptoJS = require("crypto-js");

export default class Report extends Component {
  constructor() {
    super();
    this.state = {
      reportText: "",
    };
  }

  sendReport() {
    let myUser = JSON.parse(localStorage.getItem("signin"));
    if (myUser && myUser.email) {
      if (this.state.reportText !== "") {
        console.log(" ID: ", myUser.id);
        let decrypt = CryptoJS.AES.decrypt(myUser.jwtToken, "123");
        let getDecrypt = decrypt.toString(CryptoJS.enc.Utf8);
        this.setState({
          // email: myUser.email,
          name: myUser.name,
          isSignin: true,
        });

        const headers = {
          Authorization: `Bearer ${getDecrypt}`,
        };
        const report = {
          id: myUser.id,
          reportText: this.state.reportText,
        };
        Axios.post("/kh-racer/v1/report", report, headers)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      }else{
        alert("Please input the field!")
      }
    } else {
      alert("Please signin first!");
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="page">
        <div className="row m-0 p-0">
          <div className="col-md-12 column-style">
            <div className="form-container">
              <h3 className="form-header">មតិយោបល់</h3>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  placeholder="សូមផ្តល់មតិយោបល់ទីនេះ"
                  as="textarea"
                  rows="4"
                  name="reportText"
                  onChange={this.onChange.bind(this)}
                />
              </Form.Group>
              <center>
                <Button
                  className="rounded-pill signup-button-style"
                  variant="primary"
                  type="submit"
                  onClick={this.sendReport.bind(this)}
                >
                  បញ្ជូន
                </Button>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
