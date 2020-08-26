import React, { Component } from "react";
import "./Admin.css";
import Content from "./content/Content";
import User from "./user/User";
import ReportUs from "./reportUs/ReportUs";
import {Link} from 'react-router-dom';
import Dashboard from "./dashboard/Dashboard";

export default class Admin extends Component {
  render() {
    let myItem = window.location.pathname.slice(7,11);
    console.log(myItem);
    return (
      <div className="container">
        <div className="row">
          <div className="side-menu">
            <ul>
              <a href="#">
                <li>
                  <h3>រដ្ឋបាល</h3>
                </li>
              </a>
              <Link to="/admin/dashboard">
                <li><p>ផ្ទាំងការងារ</p></li>
              </Link>
              <Link to="/admin/content">
                <li><p>អត្ថបទ</p></li>
              </Link>
              <Link to="/admin/user">
                <li><p>អ្នកប្រើប្រាស់</p></li>
              </Link>
              <Link to="/admin/report">
                <li><p>មតិយោបល់</p></li>
              </Link>
             
            </ul>
          </div>
          <div className="side-content">
            <Dashboard item={myItem}/>
            <Content item={myItem}/>
            <User item={myItem}/>
            <ReportUs item={myItem}/>
          </div>
        </div>
      </div>
    );
  }
}
