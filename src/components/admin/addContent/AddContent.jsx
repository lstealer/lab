import React, { Component } from "react";
import "./AddContent.css";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

var CryptoJS = require("crypto-js");

export default class AddContent extends Component {
  constructor() {
    super();
    this.state = {
      myImage: null,
      imageURL: null,
      id: "",
      title: "",
      author: "",
      description: "",
      khContent: "",
      countDesc: 0,
      countContent: 0,
      isAdded: true,
      noImage: "/image/noimage.png",
    };
  }

  addContent() {
    if (this.state.khContent !== "") {
      let getImageURL = null;
      let token = "";
      let myUser = JSON.parse(localStorage.getItem("signin"));
      if (myUser && myUser.isSignin) {
        let tempCode = myUser.jwtToken.toString();
        let decrypt = CryptoJS.AES.decrypt(tempCode, "123");
        console.log("DECRYPT: ", decrypt.toString(CryptoJS.enc.Utf8));

        let formData = new FormData();
        formData.append("file", this.state.myImage);
        token = decrypt.toString(CryptoJS.enc.Utf8).trim();
        Axios.post("/kh-racer/v1/uploads", formData, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        })
          .then((result) => {
            console.log("UPLOAD: ", result.data.data[0].id);
            getImageURL = result.data.data[0].id;

            let myContent = {
              title: this.state.title == "" ? "ផ្សេងៗ" : this.state.title,
              author: this.state.author == "" ? "ផ្សេងៗ" : this.state.author,
              description:
                this.state.description == ""
                  ? "ផ្សេងៗ"
                  : this.state.description,
              khContent: this.state.khContent,
              image: getImageURL,
            };
            //******************************************* */
            console.log("Added Content: ", myContent);

            Axios.post("/kh-racer/v1/content", myContent, {
              headers: {
                Authorization: "Bearer " + token,
                // "Content-Type": "multipart/form-data",
              },
            })
              .then((result) => {
                console.log(result);
                Swal.fire({
                  icon: "success",
                  title: "ជោគជ័យ",
                  text: "លោកអ្នកបាន បន្ថែមអត្ថបទបានសម្រេច!",
                });
                this.setState({
                  title: "",
                  author: "",
                  description: "",
                  khContent: "",
                  countDesc: 0,
                  countContent: 0,
                });
              })
              .catch((error) => {
                console.log(error);
                Swal.fire({
                  icon: "error",
                  title: "មានកំហុស",
                  text: "បញ្ហាក្នុងពេលបញ្ចូលទិន្នន័យ",
                });
              });
          })
          .catch((error) => {
            console.log("UPLOAD ERROR: ", error);
          });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "មិនមានអត្ថបទ",
        text: "សូមបំពេញ ព័ត៌មានឲ្យបានគ្រប់គ្រាន់!",
      });
    }
  }

  handleImage(e) {
    // e.preventDefault();
    this.setState({
      myImage: e.target.files[0],
      imageURL: URL.createObjectURL(e.target.files[0]),
    });
  }

  handleOnChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      countDesc: evt.target.value.length,
    });
  };

  onChangeContent = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      countContent: e.target.value.length,
    });
  };

  isImageError(e) {
    e.target.src = this.state.noImage;
  }

  render() {
    return (
      <div
        className="container"
        style={{
          // display:
          //   this.props.item == "add"? "" : "none",
          paddingRight: "80px",
        }}
      >
        <div className="row title-add">
          <h3>{"បន្ថែមអត្ថបទ"}</h3>
        </div>

        <div className="row">
          <div className="col-md-4">
            <h5 className="title-item">
              <p>ចំណងជើង</p>
            </h5>
            <h5 className="title-item">
              <p>អ្នកនិពន្ធ</p>
            </h5>
            <h5 className="title-item">
              <p>ពិពណ៌នា</p>
              <span style={{ color: "grey", fontSize: "14px" }}>
                [{this.state.countDesc}/200]
              </span>
            </h5>
          </div>
          <div className="col-md-4">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  style={{
                    fontFamily:
                      '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                  }}
                  className="rounded-pill"
                  type="email"
                  placeholder="ចំណងជើង"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleOnChange.bind(this)}
                  //   readOnly={this.props.item == "add" ? true : false}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  style={{
                    fontFamily:
                      '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                  }}
                  className="rounded-pill"
                  type="email"
                  placeholder="អ្នកនិពន្ធ"
                  name="author"
                  value={this.state.author}
                  onChange={this.handleOnChange.bind(this)}
                  //   readOnly={this.props.item == "add" ? true : false}
                />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  placeholder="ពិពណ៌នា"
                  as="textarea"
                  rows="4"
                  name="description"
                  value={this.state.description}
                  style={{
                    resize: "none",
                    fontFamily:
                      '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                  }}
                  onChange={this.handleOnChange.bind(this)}
                  maxLength="200"
                  //   readOnly={this.props.item == "add" ? true : false}
                />
              </Form.Group>
            </Form>
          </div>

          <div className="col-md-4">
            <label for="file">
              <img
                src={
                  this.state.imageURL === null
                    ? this.state.noImage
                    : this.state.imageURL
                }
                alt="Article Image"
                className="book-img"
                onError={this.isImageError.bind(this)}
              />
            </label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={this.handleImage.bind(this)}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h5 className="title-item">
              <p>
                អត្ថបទ<span style={{ color: "red" }}> *</span>
              </p>
              <span style={{ color: "grey", fontSize: "14px" }}>
                [{this.state.countContent}/200]
              </span>
            </h5>
          </div>
          <div className="col-md-8 content-block">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                placeholder="អត្ថបទ"
                as="textarea"
                rows="4"
                name="khContent"
                value={this.state.khContent}
                style={{
                  resize: "none",
                  fontFamily:
                    '"SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica"',
                }}
                onChange={this.onChangeContent.bind(this)}
                maxLength="200"
                // readOnly={this.props.item == "add" ? true : false}
              />
            </Form.Group>
            <Form.Text className="text-muted text-left">
              <p style={{ color: "grey" }}>
                <span style={{ color: "red" }}>* </span>ចាំបាច់ ត្រូវតែបញ្ចូល
              </p>
            </Form.Text>
          </div>
        </div>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            // style={{ display: this.props.item == "add" ? "none" : "" }}
            className="rounded-pill button-style"
            variant="primary"
            type="button"
            onClick={this.addContent.bind(this)}
          >
            បន្ថែម
          </Button>
        </div>
      </div>
    );
  }
}
