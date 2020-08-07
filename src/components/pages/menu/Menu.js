import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../../images/logo2.png";
import User from "../../../images/user.png";
import './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar
          className="fixed-top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          style={{ opacity: "0.9", width: "100vw"}}
        >
          <img style={{ width: "40px", marginRight: "5px" }} src={Logo}></img>
          <Navbar.Brand href="#home" className="mytitle">KH Racer</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="#home" className="mymenu">ទំព័រដើម</Nav.Link>
              <Nav.Link href="#about" className="mymenu">អំពីយើង</Nav.Link>
              <Nav.Link href="#contact" className="mymenu">ទំនាក់ទំនង</Nav.Link>
              <Nav.Link href="#languages" className="mymenu">ភាសា</Nav.Link>
              <Nav.Link href="#account" className="mymenu">គណនី</Nav.Link>
              <Nav.Link href="#account" style={{ padding: "0", paddingRight: "15px"}}>
              <img style={{ width: "35px"}} src={User}></img>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
