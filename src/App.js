import React, {Component} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Practice from "./components/pages/practice/Practice";
import Menu from "./components/pages/menu/Menu";
import test from "./components/pages/solo/solo";

import Party from "./components/pages/party/Party";
import Signin from "./components/pages/signin/Signin";
import Signup from "./components/pages/signup/Signup";
import Home from "./components/pages/home/Home";
import Footer from "./components/pages/footer/Footer";
import Profile from "./components/pages/profile/Profile";
import ForgetPassword from "./components/pages/forgetPasword/ForgetPassword";
import Report from "./components/pages/report/Report";
import Admin from "./components/admin/Admin";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      admin: "",
    }
  }

  componentDidMount(){
    let getPath = window.location.pathname.slice(1, 6);
    //console.log("BACK", admin)
    this.setState({
      admin: getPath,
    })
  }
  
  render(){
    // let isAdmin = window.location.pathname.slice(1, 6);
    // console.log("BACK", isAdmin)
  return (
    <div className="App">
      <Router>
        <Menu isAdmin={this.state.admin == "admin" ? true : false} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/practice" component={Practice} />
          <Route path="/solo" component={test} />
          <Route path="/party" component={Party} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/report" component={Report} />
          <Route path="/admin" component={Admin} />
        </Switch>
        <Footer isAdmin={this.state.admin == "admin" ? true : false} />
      </Router>
    </div>
  );
  }
}

export default App;
