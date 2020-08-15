import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "./Signup.css";
import Axios from "axios";

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
    this.setState({ gender: evt.target.value });
  };

  validForm = () => {};

  formOnClick = (evt) => {
    console.log(this.state);
  };

  addUser(){
    alert("Add User!");
    const user = {
      name: "roth",
      gender: true,
      dob: "2020-01-01",
      email: "roth@gmail.com",
      password: "123",
    }

    Axios.post("http://localhost:8080/kh-racer/v1/user",user).then(result=>{
      console.log("Result: ",result);
    }).catch(error=>{
      console.log("Error: ",error);
    })
  }

  render() {
    return (
      <div className="page">
        <div className="row m-0 p-0">
          <div className="col-md-12 column-style">
            <div className="signup-container">
              <h3 className="signup-header">បង្កើតគណនី</h3>
              <div className="row m-0 p-0">
                <div className="col-md-8 m-0 p-0">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        name="name"
                        type="text"
                        placeholder="បញ្ចូលឈ្មោះ"
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
                        className="rounded-pill dob-style"
                        name="dob"
                        selected={this.state.dob}
                        onChange={this.dateOnChange}
                        placeholderText="ថ្ងៃ ខែ​ ឆ្នាំកំណើត"
                        dateFormat="dd/MMM/yyyy"
                        showYearDropdown
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="បញ្ចូលអ៊ីមែល"
                        className="rounded-pill"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                        name="password"
                        type="password"
                        placeholder="បញ្ចូលលេខសំងាត់"
                        className="rounded-pill"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                        name="confirmed"
                        type="password"
                        placeholder="បញ្ចូលលេខសំងាត់ម្តងទៀត"
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
                    <div className="button-position" >
                        <Button 
                            className='rounded-pill button-style'
                            variant="primary" 
                            type="submit"
                            onClick={this.addUser.bind(this)}
                        >ចុះឈ្មោះ</Button>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
