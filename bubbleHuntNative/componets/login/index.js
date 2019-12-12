import React, {Component} from 'react';
import {app, database} from '../base';

import styles from './style';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = (text, key) => {
    this.setState({[key]: text});
  };

  handleSubmit = () => {
    const {email, password} = this.state;
    const getuser = this.props.navigation.getParam('getuser');
    console.log(getuser);
    if (email && password) {
      if (email.includes('@') && email.includes('.')) {
        if (password.length >= 6) {
          app
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(async e => {
              await AsyncStorage.setItem('user', e.user.uid);
              this.props.navigation.push('Home'); /////stped here ....
            });
        } else {
          alert('worng email !!');
        }
      } else {
        alert('Worng password !!');
      }
    }
  };
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.enterYouEmail}>Enter you email</Text>
          <TextInput
            style={styles.View}
            placeholder="enter your email"
            onChangeText={text => this.handleChange(text, 'email')}
            value={this.state.email}
          />
          <Text style={styles.enterYouPassword}>Enter you password</Text>
          <TextInput
            style={styles.View}
            secureTextEntry
            placeholder="enter your Password"
            onChangeText={text => this.handleChange(text, 'password')}
            value={this.state.password}
          />
          <TouchableOpacity onPress={this.handleSubmit}>
            <View style={styles.done}>
              <Text>Login </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}} />
      </>
    );
  }
}

export default Login;
