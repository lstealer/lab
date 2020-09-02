import React, { Component } from "react";
import "./ViewContent.css";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";

export default class ViewContent extends Component {
  constructor() {
    super();
    this.state = {
      imageURL: null,
      id: "",
      title: "",
      author: "",
      description: "",
      khContent: "",
      countDesc: 0,
      countContent: 0,
      isAdded: true,
      noImage: '/image/noimage.png',
    };
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

  componentWillMount() {
    let getContentStore = JSON.parse(localStorage.getItem("contentStore"));
    console.log("Content Store: ", getContentStore);
    if (getContentStore) {
      this.setState({
        id: getContentStore.id,
        title: getContentStore.title,
        author: getContentStore.author,
        description: getContentStore.description,
        khContent: getContentStore.khContent,
        image: getContentStore.image,
        countContent: getContentStore.khContent.length,
        countDesc: getContentStore.description.length,
      });
    }
  }

  isImageError(e) {
    e.target.src = this.state.noImage;
  }

  render() {

    return (
      <div
        className="container"
        style={{
          // display:
          //   this.props.item == "update" || this.props.item == "view" ? "" : "none",
          paddingRight: "80px",
        }}
      >
        <div className="row title-add">
          <h3>អំពីអត្ថបទ</h3>
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
                {/* [{this.state.countDesc}/200] */}
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
                  readOnly={true }
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
                  readOnly={true}
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
                  readOnly={true}
                />
              </Form.Group>
            </Form>
          </div>

          <div className="col-md-4">
          <img
                src={this.state.imageURL === null ?this.state.noImage:this.state.imageURL}
                alt="Article Image"
                className="book-img"
                onError={this.isImageError.bind(this)}
              />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h5 className="title-item">
              <p>
                អត្ថបទ<span style={{ color: "red" }}></span>
              </p>
              <span style={{ color: "grey", fontSize: "14px" }}>
                {/* [{this.state.countContent}/200] */}
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
                readOnly={true}
              />
            </Form.Group>
            <Form.Text className="text-muted text-left">
              <p style={{ color: "grey" }}>
                {/* <span style={{ color: "red" }}>* </span>ចាំបាច់ ត្រូវតែបញ្ចូល */}
              </p>
            </Form.Text>
          </div>
        </div>
      </div>
    );
  }
}
