import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../../images/logo2.png";
import User from "../../../images/1.jpg";
import "./Menu.css";
import { Link } from "react-router-dom";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
      isSignin: false,
    };
  }

  componentWillMount() {
    let myUser = JSON.parse(localStorage.getItem("signin"));
    if (myUser && myUser.email) {
      this.setState({
        // email: myUser.email,
        name: myUser.name,
        isSignin: true,
      });
    }
  }

  onSignout() {
    localStorage.removeItem("signin");
    window.location.reload();
  }

  render() {
    return (
      <div>
        <Navbar
          className="fixed-top main-menu"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          style={{ width: "100vw" }}
        >
          <Link to="/">
            <img style={{ width: "40px", marginRight: "5px"}} src={Logo}></img>
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
              <Nav.Link className="mymenu" style={{ marginTop: "-1px" }}>
                <b>
                  <span>{this.state.isSignin ? this.state.name : "គណនី"}</span>
                </b>
              </Nav.Link>
              <Nav style={{ padding: "0", paddingRight: "15px" }}>
                <div className="profile-dropdown">
                  <img
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "100px",
                      // border: "4px solid #d3d3d3",
                      objectFit: "cover",
                  
                    }}
                    src={User}
                  ></img>
                  <div className="profile-content">
                    <Nav.Link
                      onClick={this.state.isSignin?this.onSignout.bind(this):""}
                      as={Link}
                      to={this.state.isSignin ? "" : "/signup"}
                      style={{
                        margin: "10px 10px 0 0",
                        textAlign: "right",
                        color: "#000000",
                      }}
                    >
                      <p className="signout-and-signup">{this.state.isSignin ? "ចេញពីគណនី!" : "ចុះឈ្មោះ?"}</p>
                    </Nav.Link>
                    <div>
                      <img
                        style={{
                          width: "160px",
                          height: "160px",
                          margin: "15px 50px",
                          borderRadius: "100px",
                          border: "4px solid #d3d3d3",
                          objectFit: "cover",
                        }}
                        src={User}
                      ></img>
                    </div>

                    <p className="profile-username">
                      <span>
                        {this.state.isSignin ? this.state.name : "គណនី"}
                      </span>
                    </p>
                    <Nav.Link
                      as={Link}
                      to={this.state.isSignin ? "/profile" : "/signin"}
                    >
                      <button className="view-profile">
                        {this.state.isSignin ? "មើលគណនី" : "ចូលគណនី"}
                      </button>
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
