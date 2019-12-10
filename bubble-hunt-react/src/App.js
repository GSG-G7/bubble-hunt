import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AimGame from "./components/aimGame";
import Home from "./components/home";
import Login from "./components/login";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/aim-game" component={AimGame} />
        </Switch>
      </Router>
    )
  }
}

export default App;
