import React, { Component } from "react";
import "./Content.css";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      description: "",
      khContent: "",
      countDesc: 0,
      countContent: 0,
    };
  }

  addContent() {
    if (this.state.khContent !== "") {
      let myContent = {
        title: this.state.title == "" ? "ផ្សេងៗ" : this.state.title,
        author: this.state.author == "" ? "ផ្សេងៗ" : this.state.author,
        description:
          this.state.description == "" ? "ផ្សេងៗ" : this.state.description,
        khContent: this.state.khContent,
      };

      console.log("ADD Conten: ", myContent);

      Axios.post("/kh-racer/v1/content", myContent)
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
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "មិនមានអត្ថបទ",
        text: "សូមបំពេញ ព័ត៌មានឲ្យបានគ្រប់គ្រាន់!",
      });
    }
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
    })
  }

  render() {
    return (
      <div
        className="container"
        style={{ display: this.props.item == "cont" ? "" : "none" }}
      >
        <div className="row title-add">
          <h3>បន្ថែមអត្ថបទ</h3>
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
              <span style={{ color: "grey" }}>[{this.state.countDesc}/200]</span>
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
                />
              </Form.Group>
            </Form>
          </div>

          <div className="col-md-4">
            <img src="/image/KSHRD.png" alt="Profile" className="book-img" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h5 className="title-item">
              <p>អត្ថបទ</p>
              <span style={{ color: "grey" }}>[{this.state.countContent}/200]</span>
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
              />
            </Form.Group>
          </div>
        </div>
        <div className="row title-add">
          <Button
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
