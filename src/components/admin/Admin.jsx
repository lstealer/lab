import React, { Component } from "react";
import "./Admin.css";
import Content from "./content/Content";
import User from "./user/User";
import ReportUs from "./reportUs/ReportUs";
import { Link } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default class Admin extends Component {
  render() {
    let myItem = window.location.pathname.slice(7, 11);
    console.log(myItem);
    return (
      <div className="container">
        <div className="row">
          <div className="side-menu">
            <ul>
              <Link to="#">
                <li className="admin-block">
                  <h3 className="admin-title">
                    <img
                      src="/image/admin.png"
                      width="50px"
                      style={{ marginTop: "-7px" }}
                    />{" "}
                    រដ្ឋបាល
                  </h3>
                </li>
              </Link>
              <Link to="/admin/dashboard">
                <li>
                  <p>
                    <img
                      src="/image/dashboard.png"
                      width="30px"
                      style={{ marginTop: "-7px", padding: "3px 0" }}
                    />{" "}
                    ផ្ទាំងការងារ
                  </p>
                </li>
              </Link>
              <Link to="/admin/content">
                <li>
                  <p>
                    <img
                      src="/image/content.png"
                      width="30px"
                      style={{ marginTop: "-7px", padding: "3px 0" }}
                    />{" "}
                    អត្ថបទ
                  </p>
                </li>
              </Link>
              <Link to="/admin/user">
                <li>
                  <p>
                    <img
                      src="/image/user.png"
                      width="36px"
                      style={{ marginLeft: "-4px", marginTop: "-7px" }}
                    />{" "}
                    អ្នកប្រើប្រាស់
                  </p>
                </li>
              </Link>
              <Link to="/admin/report">
                <li>
                  <p>
                    <img
                      src="/image/report.png"
                      width="36px"
                      style={{ marginLeft: "-4px", marginTop: "-8px" }}
                    />{" "}
                    មតិយោបល់
                  </p>
                </li>
              </Link>
            </ul>
          </div>
          <div className="side-content">
            <Navbar bg="light" variant="light">
              <img
                src="/image/hamburger1.png"
                width="30px"
                style={{ margin: "0 20px" }}
              />
              <Nav className="mr-auto">
                <Nav.Link href="#home">ទំព័រដើម</Nav.Link>
                <Nav.Link href="#features">ទំនាក់ទំនង</Nav.Link>
        
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Navbar>

            <Dashboard item={myItem} />
            <Content item={myItem} />
            <User item={myItem} />
            <ReportUs item={myItem} />
          </div>
        </div>
      </div>
    );
  }
}
