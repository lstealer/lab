import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Signin.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import Loading from '../../../components/loading/Loading';

var CryptoJS = require("crypto-js");
export default class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isSignin: false,
      jwtToken: "",
      loading: false,
      noImage: "/image/noimage.png",
    };
  }

  componentWillMount() {
    let myUser = JSON.parse(localStorage.getItem("signin"));
    if (myUser && myUser.isSignin) {
      this.setState({
        isSignin: true,
        jwtToken: myUser.jwtToken,
      });

      let tempCode = myUser.jwtToken.toString();
      let decrypt = CryptoJS.AES.decrypt(tempCode, "123");
      console.log("DECRYPT: ", decrypt.toString(CryptoJS.enc.Utf8));

      // let header = {
      //   Authorization: "Bearer "+decrypt.toString(CryptoJS.enc.Utf8).trim(),
      // };
      let token = decrypt.toString(CryptoJS.enc.Utf8).trim();
      Axios.get("/kh-racer/v1/admin", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((result) => {
          console.log("STATUS: ", result.data.status);
          let encrypt = CryptoJS.AES.encrypt(
            result.data.status,
            "123"
          );
          localStorage.setItem("status", JSON.stringify({
            status: encrypt.toString(),
          }))
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("status")
        });
    }else{
      localStorage.removeItem("status")
    }
  }

  onSignIn() {
    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({
        loading: true,
      })
      const user = {
        email: this.state.email,
        pwd: this.state.password,
      };
      Axios.post("/authenticate", user)
        .then((result) => {
          console.log("Before Stored: ", result.data.data);
          //ENCYPT AND DECRYPT
          let encrypt = CryptoJS.AES.encrypt(
            result.data.data.jwtResponse.jwtToken,
            "123"
          );
          // console.log("ENCRYPT: ",encrypt);
          // let tempCode = encrypt.toString();
          // let decrypt = CryptoJS.AES.decrypt(tempCode,"123");
          // console.log("DECRYPT: ",decrypt.toString(CryptoJS.enc.Utf8));

          localStorage.setItem(
            "signin",
            JSON.stringify({
              id: result.data.data.id,
              name: result.data.data.name,
              gender: result.data.data.genderRS,
              dob: result.data.data.dob,
              email: user.email,
              jwtToken: encrypt.toString(),
              isSignin: true,
            })
          );
          console.log("Stored account: ", localStorage.getItem("signin"));
          this.setState({
            isSignin: true,
            jwtToken: encrypt.toString(),
            loading: false,
          });
          Swal.fire({
            icon: "success",
            title: "ជោគជ័យ",
            text: "លោកអ្នកបានចូលគណនី បានសម្រេច!",
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
            title: "មិនអាចចូលគណនី",
            text: "សូមបំពេញ ព័ត៌មានឲ្យបានត្រឹមត្រូវ!",
          });
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "ផ្អាកដំណើរការ",
        text: "សូមបំពេញ ព័ត៌មានឲ្យបានគ្រប់គ្រាន់!",
      });
    }
  }

  handleOnChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row m-0 p-0">
          <div className="col-md-12 column-style">
            <div className="signin-container">
              <h3 className="signin-header">ចូលគណនី</h3>
              <center>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                     style={{
                      fontFamily:
                        '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                    }}
                      className="rounded-pill"
                      type="email"
                      placeholder="អុីមែល"
                      name="email"
                      onChange={this.handleOnChange.bind(this)}
                    />
                    {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      style={{
                        fontFamily:
                          '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                      }}
                      className="rounded-pill"
                      type="password"
                      placeholder="លេខសម្ងាត់"
                      name="password"
                      onChange={this.handleOnChange.bind(this)}
                    />
                  </Form.Group>
                  {/* <p className="text-style">ភ្លេចលេខសម្ងាត់?</p> */}
                  <Button
                    className="rounded-pill button-style"
                    variant="primary"
                    type="button"
                    onClick={this.onSignIn.bind(this)}
                  >
                    ចូល
                  </Button>
                  <p className="text-style">មិនទាន់មានគណនី</p>
                  <Link to={"signup"}>
                    <Button
                      className="rounded-pill signup-button-style"
                      variant="primary"
                      type="submit"
                    >
                      ចុះឈ្មោះឥឡូវនេះ
                    </Button>
                  </Link>
                </Form>
              </center>
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
