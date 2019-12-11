import React, { Component } from 'react';
import { app, database } from '../base';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const {
      history: { push },
    } = this.props;
    app
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({user:{uid}})=> {
        database.collection('users').doc(uid).get().then(data => {
          const userInfo = data.data();
          localStorage.setItem('userInfo', JSON.stringify(userInfo))
        })        
      })
      .then(() => push('/'))
      .catch(console.warn);
  };

  handleChange = e => {
    const key = e.target.name;
    const { value } = e.target;
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
