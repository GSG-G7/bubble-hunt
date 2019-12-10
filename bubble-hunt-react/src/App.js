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
    loading: true,
  };

  componentDidMount() {
    const { loading } = this.state;
    const firstLoad = () => {
      if (loading) this.setState({ loading: false });
    };
    app.auth().onAuthStateChanged(currentUser => this.setState({ currentUser }, firstLoad));
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
          src="https://www.pngfind.com/pngs/m/339-3396821_png-file-svg-download-icon-logout-transparent-png.png"
          alt="logout"
        />
        <p className="logout">LOGOUT</p>
      </div>
    </div>
  );

  render() {
    const { currentUser, loading } = this.state;
    const { Logout } = this;
    if (loading) return <h1>Loading...</h1>;
    return (
      <Router>
        {currentUser && <Logout />}
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/aim-game" component={AimGame} currentUser={currentUser} />
          <PrivateRoute path="/sign-up" component={Signup} currentUser={!currentUser} />
          <PrivateRoute path="/login" component={Login} currentUser={!currentUser} />
        </Switch>
      </Router>
    );
  }
}

export default App;
