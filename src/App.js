import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Practice from './components/pages/practice/Practice';
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from './components/pages/Menu';
import Solo from './components/pages/solo/Solo';
import Party from './components/pages/party/Party';
import SignIn from './components/pages/signin/SignIn';
import SignUp from './components/pages/signup/SignUp';
import ListContents from './components/listContents/ListContents';

function App() {
  return (
    <div className="App">
      <Router>
      <Menu />
        <Switch>
          {/* <Route exact path="/" component={ListContents} /> */}
          <Route exact path="/" component={Practice} />
          {/* <Route path="/practice" component={Practice} /> */}
          <Route path="/solo" component={Solo} />
          <Route path="/party" component={Party} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
