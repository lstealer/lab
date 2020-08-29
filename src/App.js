import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Practice from "./components/pages/practice/Practice";
import Menu from "./components/pages/menu/Menu";
import Solo from "./components/pages/solo/Solo";
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

function App() {
  let isAdmin = window.location.pathname.slice(1, 6);
  return (
    <div className="App">
      <Router>
        <Menu isAdmin={isAdmin == "admin" ? true : false} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/practice" component={Practice} />
          <Route path="/solo" component={Solo} />
          <Route path="/party" component={Party} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/report" component={Report} />
          <Route path="/admin" component={Admin} />
        </Switch>
        <Footer isAdmin={isAdmin == "admin" ? true : false} />
      </Router>
    </div>
  );
}

export default App;
