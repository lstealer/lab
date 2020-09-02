import React, { Component } from "react";
import Home from "../pages/home/Home";
import Practice from "../pages/practice/Practice";
import solo from '../pages/solo/solo';
import Party from "../pages/party/Party";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";
import Profile from "../pages/profile/Profile";
import Report from "../pages/report/Report";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menu from "../pages/menu/Menu";
import Footer from "../pages/footer/Footer";

export default class Client extends Component {
  render() {
    return (
      <div>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/practice" component={Practice} />
            <Route path="/solo" component={solo} />
            <Route path="/party" component={Party} />
            <Route exact path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile/:id" component={Profile} />
            {/* <Route path="/forgetpassword" component={ForgetPassword} /> */}
            <Route path="/report" component={Report} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
