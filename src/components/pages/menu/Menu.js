import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../../images/logo2.png";
import User from "../../../images/1.jpg";
import "./Menu.css";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
    }
  }

  componentWillMount(){
    let myUser = JSON.parse(localStorage.getItem("signin"));
    console.log("EMAIL: ", myUser.email);
    if(myUser && myUser.email){
      this.setState({
        email: myUser.email,
      })
    }
    
  }
  render() {
    return (
      <div>
        <Navbar
          className="fixed-top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          style={{ opacity: "0.9", width: "100vw" }}
        >
          <Link to="/">
            <img style={{ width: "40px", marginRight: "5px" }} src={Logo}></img>
          </Link>
          <Navbar.Brand as={Link} to="/" className="mytitle">
            KH Racer
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link as={Link} to="/" className="mymenu">
                ទំព័រដើម
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="mymenu">
                អំពីយើង
              </Nav.Link>
              <Nav.Link href="#contact" className="mymenu">
                ទំនាក់ទំនង
              </Nav.Link>
              <Nav.Link as={Link} to="/language" className="mymenu dropdown">
                <h6 className="dropbtn">ភាសា</h6>
                <div className="dropdown-content">
                  <p>ខ្មែរ</p>
                  <p>អង់គ្លេស</p>
                </div>
              </Nav.Link>
              <Nav.Link className="mymenu">គណនី</Nav.Link>
              <Nav
                style={{ padding: "0", paddingRight: "15px" }}
              >
                <div className="profile-dropdown">
                  <img style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "100px",
                        // border: "4px solid #d3d3d3",
                        objectFit: 'cover',
                      }} src={User}></img>
                  <div className="profile-content">
                    <Nav.Link as={Link} to="/signup" style={{ margin: "10px 10px 0 0", textAlign: "right", color: "#000000" }}>
                      ចុះឈ្មោះ?
                    </Nav.Link>
                    <div >
                    <img style={{
                        width: "160px",
                        height: "160px",
                        margin: "15px 50px",
                        borderRadius: "100px",
                        border: "4px solid #d3d3d3",
                        objectFit: 'cover',
                      }}
                      src={User}
                    ></img>
                    </div>
                    
                    <p className="profile-username">{this.state.email}</p>
                    <Nav.Link as={Link} to="/signin">
                    <button className="view-profile">ចូលគណនី</button>
                    </Nav.Link>
                  </div>
                </div>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
