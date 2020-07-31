import React, { Component } from "react";
import "./signup.css";
import { Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class SignUp extends Component {

  constructor(){
    super();
    this.state = {
      name : '',
      gender :'', 
      dob : null,
      email:'',
      password:'',
      comfirmed: ''
    };
  }

  handleChange = ({ target }) => {
    this.setState({
       [target.name]: target.value
    })
  }

  dateOnChange = (evt) => {
    this.setState({dob : evt})
  }

  genderOnChange = (evt) => {
    console.log("====>",evt.target.checked)
    this.setState({gender: evt.target.value})
  }

  validForm = () => {
    
  }

  formOnClick = (evt) => {
    console.log(this.state)
  }

  render() {
    return (
      <div className="signup_background">
        <div className="signup_form_bg">
          ​​​​<h3 className="signup_form_header">បង្កើតគណនី</h3>
          <div>
            <div className="left_box_size">
              <Form>
              <Form.Group controlId="formBasicEmail">
                  <Form.Control 
                    name='name'
                    type="text" 
                    placeholder="បញ្ចូលឈ្មោះ" 
                    className='rounded-pill'
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>

                  <Form.Check
                    custom
                    inline
                    className='text_style'
                    type="radio"
                    label="ស្រី"
                    name="gender"
                    value='Female'
                    // checked={this.state.gender === "Female"}
                    id="custom-inline-radio-1"
                    onChange = {this.genderOnChange}
                  />
                  <Form.Check
                    custom
                    inline
                    className='text_style'
                    type="radio"
                    label="ប្រុស"
                    name="gender"
                    value='Male'
                    // checked={this.state.gender === "Male"}
                    id="custom-inline-radio-2"
                    onChange = {this.genderOnChange}
                  />

                  <DatePicker
                    className='rounded-pill dob_style'
                    name='dob'
                    selected={this.state.dob}
                    onChange={this.dateOnChange}
                    placeholderText='ថ្ងៃ ខែ​ ឆ្នាំកំណើត'
                    dateFormat='dd/MMM/yyyy'
                    showYearDropdown
                    
                  />

                </Form.Group>
            
                <Form.Group controlId="formBasicEmail">
                  <Form.Control 
                    name='email'
                    type="email" 
                    placeholder="បញ្ចូលអ៊ីមែល" 
                    className='rounded-pill'
                    onChange={this.handleChange}  
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control 
                    name='password'
                    type="password" 
                    placeholder="បញ្ចូលលេខសំងាត់" 
                    className='rounded-pill' 
                    onChange={this.handleChange}  
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Control 
                    name='confirmed'
                    type="password" 
                    placeholder="បញ្ចូលលេខសំងាត់ម្តងទៀត" 
                    className='rounded-pill' 
                    onChange={this.handleChange}   
                  />
                </Form.Group>
              </Form>
            </div>
            <div className="right_box_size">
              <h1>KH Racer</h1>
              <h1>សូមស្វាគមន៍</h1>
              <button 
                type="" 
                className="sign_up_button_style"
                onClick={this.formOnClick}
              >ចុះឈ្មោះ</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
