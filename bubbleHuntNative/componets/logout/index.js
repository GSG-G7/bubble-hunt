import React, {Component} from 'react';
import {app, database} from '../base';

import styles from './style';
import {
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const Logout = props => {
  const handleLogout = async () => {
    console.log(props);
    try {
      await AsyncStorage.removeItem('user');
      await app.auth().signOut();
      props.navigation.navigate('Home', {
        user: true,
      });
    } catch (e) {
      console.log('error in logout', e);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={{borderWidth: 2, borderColor: 'red'}}
        onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Logout;

// const Styles = StyleSheet.create({});
