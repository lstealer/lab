import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Practice from './components/pages/practice/Practice';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from './components/pages/menu/Menu';
import Solo from './components/pages/solo/Solo';
import Party from './components/pages/party/Party';
import Signin from './components/pages/signin/Signin';
import Signup from './components/pages/signup/Signup';
import ListContents from './components/listContents/ListContents';
import Home from './components/pages/home/Home';
import Footer from './components/pages/footer/Footer';
import Profile from './components/pages/profile/Profile';
import ForgetPassword from './components/pages/forgetPasword/ForgetPassword';
import Report from './components/pages/report/Report';

function App() {
  return (
    <div className="App">
      <Router>
      <Menu />
        <Switch>
          {/* <Route exact path="/" component={ListContents} /> */}
          {/* <Route exact path="/" component={Practice} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/practice" component={Practice} />
          <Route path="/solo" component={Solo} />
          <Route path="/party" component={Party} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/forgetpassword" component={ForgetPassword} />
          <Route path="/report" component={Report} />
        </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
