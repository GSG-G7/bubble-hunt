import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Home from './componets/home';
import Login from './componets/login';
import Signup from './componets/signup';
import Stats from './componets/stats';
import Game from './componets/game';
import AuthLoadingScreen from './componets/auth';
import Logout from './componets/logout';

const SignedIn = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Hunt the bubble ',
      headerTintColor: 'green',
      headerTitleStyle: {
        fontSize: 24,
        textAlign: 'center',
        flex: 1,
        marginRight: -30,
      },
      headerStyle: {
        backgroundColor: '#4A94FB',
        borderBottomColor: 'transparent',
        borderWidth: 1,
      },
      headerRight: <Logout />,
    },
  },
  Stats,
  Logout,
  Game: {
    screen: Game,
    navigationOptions: {
      title: 'Hunt bubble',
    },
  },
});
const SignedOut = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      header: null,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: 'Signup',
    },
  },
  Stats: {
    screen: Stats,
    navigationOptions: {
      title: 'Stats',
    },
  },
});

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    SignedOut,
    SignedIn,
  }),
);

// const App = Navigator;

// export default App;
