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

  render() {
    const { currentUser } = this.state;
    return (
      <Router>
        {currentUser && (
          <button onClick={this.handleLogout} type="button">
            Logout
          </button>
        )}
        <Switch>
          <PrivateRoute exact path="/sign-up" component={Signup} currentUser={!currentUser} />
          <PrivateRoute exact path="/" component={Home} currentUser={currentUser} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/aim-game" component={AimGame} />
        </Switch>
      </Router>
    );
  }
}

export default App;
