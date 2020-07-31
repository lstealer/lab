import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
} from "react-bootstrap";
import Logo from "../../images/logo2.png";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <Navbar
          bg="dark"
          style={{ opacity: "0.7", width: "100vw" }}
          variant="dark"
          className="menu fixed-top"
        >
          <img style={{ width: "3vw" }} src={Logo}></img>
          <Navbar.Brand className="mr-auto" href="#KH Racer">
            KH Racer
          </Navbar.Brand>
          <Form inline>
            <Nav className="mr-sm-2">
              <Nav.Link href="#ទំព័រដើម">ទំព័រដើម</Nav.Link>
              <Nav.Link href="#អំពើយើង">អំពើយើង</Nav.Link>
              <Nav.Link href="#ទំនាក់ទំនង">ទំនាក់ទំនង</Nav.Link>
              <Nav.Link href="#ភាសា">ភាសា</Nav.Link>
              <Nav.Link href="#គណនី">គណនី</Nav.Link>
            </Nav>
          </Form>
        </Navbar>
      </div>
    );
  }
}
