import React, {Component} from 'react';
import {app, database} from '../base';
import styles from './style';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  };

  handleChange = (text, key) => {
    this.setState({[key]: text});
  };

  handleSubmit = async () => {
    const {email, password, username} = this.state;
    if (username) {
      if (email && password) {
        if (email.includes('@') && email.includes('.')) {
          if (password.length >= 6) {
            try {
              await app
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(({user}) => {
                  // to local storage
                  database
                    .collection('users')
                    .doc(user.uid)
                    .set({
                      username: username,
                      score: 0,
                    });
                });
            } catch (err) {
              console.log(err, 'error in sign up');
              alert('somthing wrong with sign up ');
            }
          } else {
            alert('worng email !!');
          }
        } else {
          alert('Worng password !!');
        }
      } else {
        alert('empty field !!');
      }
    } else {
      alert('enter your name !!');
    }
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.enterYouEmail}>enter you email</Text>
          <TextInput
            style={styles.View}
            placeholder="enter your email"
            onChangeText={text => this.handleChange(text, 'email')}
            value={this.state.email}
          />
          <Text style={styles.enterYouName}>enter you name</Text>
          <TextInput
            style={styles.View}
            placeholder="enter your name"
            onChangeText={text => this.handleChange(text, 'username')}
            value={this.state.username}
          />
          <Text style={styles.enterYouPassword}>enter you password</Text>
          <TextInput
            style={styles.View}
            placeholder="enter your passwoed"
            onChangeText={text => this.handleChange(text, 'password')}
            value={this.state.password}
          />
          <TouchableOpacity onPress={this.handleSubmit}>
            <View style={styles.done}>
              <Text>Done </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}} />
      </>
    );
  }
}

export default Signup;
