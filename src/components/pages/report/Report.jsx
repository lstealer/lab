import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Report.css";
import Axios from "axios";
import Swal from "sweetalert2";

var CryptoJS = require("crypto-js");

export default class Report extends Component {
  constructor() {
    super();
    this.state = {
      reportText: "",
      count: 0,
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
            Swal.fire({
              icon: "success",
              title: "ជោគជ័យ",
              text: "មតិយោបល់ របស់លោកអ្នកត្រូវបានបញ្ជូន!",
            })
            this.setState({
              reportText: "",
              count: 0,
            })
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "ផ្អាកដំណើរការ",
          text: "សូមបំពេញ ព័ត៌មានឲ្យបានគ្រប់គ្រាន់!",
        });
      }
    } else {
      Swal.fire({
        icon: "info",
        title: "មិនអនុញ្ញាត",
        text: "សូមចូលគណនីរបស់អ្នក ជាមុនសិន!",
      });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      count: e.target.value.length,
    });
  }

  render() {
    return (
      <div className="page">
        <div className="row m-0 p-0">
          <div className="col-md-12 column-style">
            <div className="form-container">
              <h3 className="form-header">មតិយោបល់</h3>
              <div
                style={{ color: "#ffffff", textAlign: "right", width: "100%" }}
              >
                <span>{this.state.count}/200</span>
              </div>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  placeholder="សូមផ្តល់មតិយោបល់ទីនេះ"
                  as="textarea"
                  rows="4"
                  name="reportText"
                  value={this.state.reportText}
                  style={{
                    resize: "none",
                    fontFamily:
                      '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                  }}
                  onChange={this.onChange.bind(this)}
                  maxLength="200"
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
