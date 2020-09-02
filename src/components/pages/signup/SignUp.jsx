import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "./signup.css";
import Axios from "axios";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import Loading from "../../loading/Loading";

var CryptoJS = require("crypto-js");

export default class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      gender: "",
      dob: null,
      email: "",
      password: "",
      comfirmed: "",
      loading: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  dateOnChange = (evt) => {
    this.setState({ dob: evt });
  };

  genderOnChange = (evt) => {
    console.log("====>", evt.target.checked);
    this.setState({ gender: evt.target.value }, () => {});
  };

  validForm = () => {};

  formOnClick = (evt) => {
    console.log(this.state);
  };

  addUser() {
    // console.log(" Gender: ", this.state.gender);
    if (
      this.state.name !== "" &&
      this.state.gender !== "" &&
      this.state.dob !== null &&
      this.state.email !== "" &&
      this.state.password !== ""
    ) {
      //console.log(this.state.password,": ", this.state.confirmed)
      let myPassword = this.state.password.trim();
      let myConfirmed = this.state.confirmed.trim();
      if (myPassword == myConfirmed) {
        const user = {
          name: this.state.name,
          gender: this.state.gender == "Male" ? true : false,
          dob: new Date(Date.parse(this.state.dob)).toISOString().slice(0, 10),
          email: this.state.email,
          password: this.state.password,
        };
        //console.log(" User: ", user);
        //INSERT: add new user into database;
        this.setState({
          loading: true,
        })
        Axios.post("/kh-racer/v1/user", user)
          .then((result) => {
            console.log("Result: ", result);
            const myUser = {
              email: this.state.email,
              pwd: this.state.password,
            };
            Axios.post("/authenticate", myUser)
              .then((myResult) => {
                console.log("Before Stored: ", myResult.data.data);
                //ENCYPT AND DECRYPT
                let encrypt = CryptoJS.AES.encrypt(
                  myResult.data.data.jwtResponse.jwtToken,
                  "123"
                );
                // console.log("ENCRYPT: ",encrypt);
                // let tempCode = encrypt.toString();
                // let decrypt = CryptoJS.AES.decrypt(tempCode,"123");
                // console.log("DECRYPT: ",decrypt.toString(CryptoJS.enc.Utf8));

                localStorage.setItem(
                  "signin",
                  JSON.stringify({
                    id: myResult.data.data.id,
                    name: myResult.data.data.name,
                    gender: myResult.data.data.genderRs,
                    dob: myResult.data.data.dob,
                    email: myUser.email,
                    image: myResult.data.data.image,
                    jwtToken: encrypt.toString(),
                    isSignin: true,
                  })
                );
                console.log("Stored account: ", localStorage.getItem("signin"));

                this.setState({
                  loading: false,
                })

                Swal.fire({
                  icon: "success",
                  title: "ជោគជ័យ",
                  text: "លោកអ្នកចុះឈ្មោះ បានសម្រេច!",
                }).then((result) => {
                  if (result.value) {
                    window.location.reload();
                  }
                });
              })
              .catch((error) => {
                console.log(error);
                Swal.fire({
                  icon: "error",
                  title: "មិនអាចចូលគណនីបាន",
                  text: "សូមចូល​ទៅកាន់គណនីរបស់លោកអ្នកម្តងទៀត!",
                });
              });
          })
          .catch((error) => {
            console.log("Error: ", error);
            Swal.fire({
              icon: "error",
              title: "មិនអាចចុះឈ្មោះបាន",
              text: "សូមបំពេញ ព័ត៌មានឲ្យបានគ្រប់គ្រាន់!",
            });
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "លេខសំងាត់មិនត្រឹមត្រូវ",
          text: "សូមបំពេញ លេខសំងាត់ឲ្យដូចគ្នា!",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "ផ្អាកដំណើរការ",
        text: "សូមបំពេញ ព័ត៌មានឲ្យបានគ្រប់គ្រាន់!",
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col-md-12 column-style">
            <div className="signup-container">
              <h3 className="signup-header">បង្កើតគណនី</h3>
              <div className="row m-0 p-0">
                <div className="col-md-8 m-0 p-0">
                  <Form>
                    <Form.Text className="text-muted text-left">
                      <p style={{ color: "#ffffff", marginBottom: "4px" }}>
                        <span style={{ color: "red" }}>* </span>
                        ឈ្មោះមិនត្រូវមានដកឃ្លា ឬនិមត្តសញ្ញផ្សេងៗ
                      </p>
                    </Form.Text>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        style={{
                          fontFamily:
                            '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                        }}
                        name="name"
                        type="text"
                        placeholder="ឈ្មោះ"
                        className="rounded-pill"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Check
                        custom
                        inline
                        className="text-style"
                        type="radio"
                        label="ស្រី"
                        name="gender"
                        value="Female"
                        // checked={this.state.gender === "Female"}
                        id="custom-inline-radio-1"
                        onChange={this.genderOnChange}
                      />
                      <Form.Check
                        custom
                        inline
                        className="text-style"
                        type="radio"
                        label="ប្រុស"
                        name="gender"
                        value="Male"
                        // checked={this.state.gender === "Male"}
                        id="custom-inline-radio-2"
                        onChange={this.genderOnChange}
                      />

                      <DatePicker
                        style={{
                          fontFamily:
                            '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                        }}
                        className="rounded-pill dob-style"
                        name="dob"
                        selected={this.state.dob}
                        onChange={this.dateOnChange}
                        placeholderText="ថ្ងៃ ខែ​ ឆ្នាំកំណើត"
                        dateFormat="dd/MMM/yyyy"
                        // showYearDropdown
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        style={{
                          fontFamily:
                            '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                        }}
                        name="email"
                        type="email"
                        value={this.state.email || ""}
                        placeholder="អុីមែល"
                        className="rounded-pill"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                        style={{
                          fontFamily:
                            '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                        }}
                        name="password"
                        type="password"
                        value={this.state.password}
                        placeholder="លេខសំងាត់"
                        className="rounded-pill"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                        style={{
                          fontFamily:
                            '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                        }}
                        name="confirmed"
                        type="password"
                        value={this.state.confirmed || ""}
                        placeholder="លេខសំងាត់ម្តងទៀត"
                        className="rounded-pill"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                  </Form>
                </div>
                <div className="col-md-4 m-0 p-0">
                  <center>
                    <div className="button-position">
                      <h1 className="text-color">KH Racer</h1>
                      <h1 className="text-color">សូមស្វាគមន៍</h1>
                    </div>
                    <div className="button-position">
                      <Button
                        className="rounded-pill button-style"
                        variant="primary"
                        type="submit"
                        onClick={this.addUser.bind(this)}
                      >
                        ចុះឈ្មោះ
                      </Button>
                    </div>
                  </center>
                </div>
              </div>
              <div className="row text-center m-0 p-0">
                <div className="col-md-12">
                  <Loading loading={this.state.loading} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
