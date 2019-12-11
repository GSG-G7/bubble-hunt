import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import styles from './appstyle';

const LandingPage = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View id="container" style={styles.container}>
            <Text id="appTitle" style={styles.appTitle}>
              Aim Game
            </Text>
            <Text id="hint" style={styles.hint}>
              Hint : you need to pop all the bubbles appears
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const Navigator = createStackNavigator({
  LandingPage,
});

const App = createAppContainer(Navigator);

export default App;
