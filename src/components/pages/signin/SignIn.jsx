import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./Signin.css";
import { Link } from "react-router-dom";
import Axios from "axios";

export default class Signin extends Component {

  constructor(){
    super();
    this.state = {
      isSignin: false,
      jwtToken: "",
    };
  }

  componentWillMount(){
    let myUser = JSON.parse(localStorage.getItem("signin"));
    if(myUser && myUser.isSignin){
      this.setState({
        isSignin: true,
        jwtToken: myUser.jwtToken,
      })
    }
  }

  onSignIn(){ 
    
    const user = {
      email: "koko@gmail.com",
      pwd: "123",
    }
    Axios.post("/authenticate", user).then(result=>{
     // console.log(result.data.data.jwtToken);
      localStorage.setItem("signin", JSON.stringify({ 
        isSignin: true,
        jwtToken: result.data.data.jwtToken,
        email: user.email,
      }))
      console.log("Stored account: ",localStorage.getItem("signin"));
      this.setState({
        isSignin: true,
        jwtToken: result.data.data.jwtToken,
      })
    }).catch(error => {
      console.log(error);
    })
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
      <div className="page">
        <div className="row m-0 p-0">
          <div className="col-md-12 column-style">
            <div className="signin-container">
              <h3 className="signin-header">ចូលគណនី</h3>
              <center>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      className="rounded-pill"
                      type="email"
                      placeholder="អុីមែល"
                    />
                    {/* <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text> */}
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      className="rounded-pill"
                      type="password"
                      placeholder="លេខសម្ងាត់"
                    />
                  </Form.Group>
                  <p className="text-style">ភ្លេចលេខសម្ងាត់?</p>
                  <Button 
                      className='rounded-pill button-style'
                      variant="primary" 
                      type="button"
                      onClick={this.onSignIn.bind(this)}
                  >ចូល</Button>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
