import React from "react";
import { app } from "./components/base";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AimGame from "./components/aimGame";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
import PrivateRoute from './components/privetRoute';
import "./App.css";

class App extends React.Component {
  state= {
    currentUser: null,
  }
  handleLogout =  () =>  {
     app.auth().signOut()
     .then(() => this.setState({currentUser: null}))
     .catch(e => console.log('error in logout'))
    
  }
  setUser = (currentUser) => this.setState({currentUser});
  render() {
    return (
      <Router>
      {this.state.currentUser && <button onClick={this.handleLogout}>Logout</button>}
          <Switch>
          <PrivateRoute exact path="/sign-up" component={Signup} setUser={this.setUser} currentUser={!this.state.currentUser}/>
          <PrivateRoute exact path="/" component={Home} currentUser={this.state.currentUser} />
          <Route exact path="/login" component={(routerProps)=> <Login setUser={this.setUser} {...routerProps}/>} />
          <PrivateRoute exact path="/aim-game" component={AimGame} />
          </Switch>
        </Router>
    )
  }
}

export default App;
