import React, { Component } from "react";
import { app } from "../base";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log({ email, password });
    app.auth().signInWithEmailAndPassword(email, password).then(
          app.auth().onAuthStateChanged(currentUser => {
            console.log("from onAuthstateChange", currentUser);
            this.props.setUser(currentUser);
          })
        ).catch(console.warn)
   
  };

  handleChange = e => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({ [key]: value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="enter  your name"
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="enter  your name"
            onChange={this.handleChange}
            value={password}
          />
          <button type="submit" name="login">
            login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
