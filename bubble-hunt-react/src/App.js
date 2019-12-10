import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { app } from './components/base';

import AimGame from './components/aimGame';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

class App extends React.Component {
  state = {
    currentUser: null,
  };

  componentDidMount() {
    app.auth().onAuthStateChanged(currentUser => this.setState({ currentUser }));
  }

  handleLogout = () => {
    app
      .auth()
      .signOut()
      .catch(e => console.log('error in logout', e));
  };

  Logout = () => (
    <div
      className="navigation"
      onClick={this.handleLogout}
      role="button"
      onKeyDown={() => {}}
      tabIndex="-1"
    >
      <div className="button">
        <img
          src="https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg"
          alt="logout"
        />
        <p className="logout">LOGOUT</p>
      </div>
    </div>
  );

  render() {
    const { currentUser } = this.state;
    const { Logout } = this;
    return (
      <Router>
        {currentUser && <Logout />}
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/sign-up" component={Signup} currentUser={!currentUser} />
          <PrivateRoute exact path="/login" component={Login} currentUser={!currentUser} />
          <PrivateRoute exact path="/aim-game" component={AimGame} currentUser={currentUser} />
        </Switch>
      </Router>
    );
  }
}

export default App;
