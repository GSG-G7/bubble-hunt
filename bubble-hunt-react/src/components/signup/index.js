import React from 'react';
import { withRouter } from 'react-router-dom';
import { app, database } from '../base';
import image from '../../assests/depositphotos_8894419-stock-illustration-pastel-tones-bubble-background.jpg';

const Signup = ({ history }) => {
  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password, username } = e.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(({ user }) => {
          database
            .collection('users')
            .doc(user.uid)
            .set({
              username: username.value,
              score: 0,
            });
        });

      history.push('/');
    } catch (err) {
      console.log(err, 'error in sign up');
    }
  };
  return (
    <div>
      <img alt="bubbles" src={image} height="142" width="142" />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input type="text" name="email" id="email" placeholder="enter your name" />
        </label>
        <label htmlFor="username">
          username
          <input type="username" name="username" id="username" placeholder="enter your name" />
        </label>
        <label htmlFor="password">
          password
          <input type="password" name="password" id="password" placeholder="enter your name" />
        </label>
        <button type="submit" name="signup">
          Signup
        </button>
      </form>
    </div>
  );
};

export default withRouter(Signup);
