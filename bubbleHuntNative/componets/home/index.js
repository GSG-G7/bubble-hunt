import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import styles from './style';

const Home = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View id="container" style={styles.container}>
            <ImageBackground
              source={require('../../assests/images.jpeg')}
              style={styles.ImageBackground}>
              <View id="textContainer" style={styles.textContainer}>
                <Text id="appTitle" style={styles.appTitle}>
                  Aim Game
                </Text>
                <Text id="hint" style={styles.hint}>
                  Hint : you need to pop all the bubbles appears
                </Text>
              </View>
              <TouchableOpacity style={styles.touchImage}>
                <ImageBackground
                  source={{
                    uri:
                      'https://cdn0.iconfinder.com/data/icons/startup-and-new-business-3/24/target-512.png',
                  }}
                  style={styles.aimGame}>
                  <Text style={styles.start}> let's Go </Text>
                </ImageBackground>
              </TouchableOpacity>
              <View id="linkContainer" style={styles.linkContainer}>
                <Text>Join us as a new player!</Text>
                <TouchableOpacity
                  onPress={() => {
                    /*link to signup */
                  }}>
                  <Text id="link" style={styles.link}>
                    click here ..
                  </Text>
                </TouchableOpacity>
                <Text style={{marginTop: 20}}>
                  Watch the highest stats for players
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    /*link to stats */
                  }}>
                  <Text id="link" style={styles.link}>
                    click here ..
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
