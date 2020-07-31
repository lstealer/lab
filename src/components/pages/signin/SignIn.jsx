import React, { Component } from 'react'
import './signin.css'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class SignIn extends Component {
  constructor(){
    super();
    this.state = {
      email : '',
      password : ''
    };
  }

  handleOnChange = (evt) => {
    this.setState({[evt.target.name] : evt.target.value})
    console.log(evt.target.name, evt.target.value)
  }

  formOnClick = (evt) => {
    console.log(this.state)
  }
    render() {
        return (
          <div className="signin_background">
            <div className="signin_form_background">
              <div className="signin_form_header">ចូលគណនី</div>
              <Form>
                <center>
                    {/* <Form.Control type="email" placeholder="អ៊ីមែល" className="text_box_style"/> */}
                    <input
                      name = 'email'
                      className="text_box_style"
                      type="text"
                      placeholder="អ៊ីមែល"
                      onChange={this.handleOnChange}
                    />
                    {/* <Form.Control type="password" placeholder="លេខសំងាត់" className='text_box_style' /> */}
                    <input
                      name='password'
                      className="text_box_style"
                      type="password"
                      placeholder="លេខសម្ងាត់"
                      onChange={this.handleOnChange}
                    />

                  <p className="text_style">ភ្លេចលេខសម្ងាត់?</p>
                  <button 
                    className="sign_in_button_style"
                    onClick={this.formOnClick}
                  >ចូល</button>

                  <p className="text_style">មិនទាន់មានគណនី</p>
                  <Link to={'signup'}>
                    <button type="" className="to_sign_up_button_style">
                        ចុះឈ្មោះឥលូវនេះ
                    </button>
                  </Link>
                </center>
              </Form>
            </div>
          </div>
        );
    }
}
