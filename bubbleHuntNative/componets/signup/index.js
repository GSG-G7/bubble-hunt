import React from 'react';
import styles from './style';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

function Signup(props) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.enterYouEmail}>enter you email</Text>
        <TextInput style={styles.View} placeholder="enter your email" />
        <Text style={styles.enterYouName}>enter you name</Text>
        <TextInput style={styles.View} placeholder="enter your email" />
        <Text style={styles.enterYouPassword}>enter you password</Text>
        <TextInput style={styles.View} placeholder="enter your email" />
        <TouchableOpacity>
          <View style={styles.done}>
            <Text>Done </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}} />
    </>
  );
}

export default Signup;
