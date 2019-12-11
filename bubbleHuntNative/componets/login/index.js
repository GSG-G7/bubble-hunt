import React from 'react';
import styles from './style';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

function Login(props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.enterYouEmail}>Enter you email</Text>
        <TextInput style={styles.View} placeholder="enter your email" />
        <Text style={styles.enterYouPassword}>Enter you password</Text>
        <TextInput style={styles.View} placeholder="enter your Password" />
        <TouchableOpacity>
          <View style={styles.done}>
            <Text>Login </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
    </>
  );
}

export default Login;
