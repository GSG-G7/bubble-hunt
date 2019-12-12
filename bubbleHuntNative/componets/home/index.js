import React, {Component} from 'react';
import {app} from '../base';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import styles from './style';

class Home extends Component {
  state = {
    currentUser: null,
    loading: true,
  };
  componentDidMount = async () => {
    const currentUser = await AsyncStorage.getItem('user');
    if (currentUser) {
      this.setState({currentUser});
    }
    const {loading} = this.state;

    app.auth().onAuthStateChanged(currentUser =>
      this.setState({currentUser}, () => {
        if (loading) {
          this.setState({loading: false});
        }
      }),
    );

    const isDelete = this.props.navigation.getParam('user');
    console.log(isDelete);
  };
  getuser = userToken => {
    this.setState({currentUser: userToken});
  };

  deleteuser = () => {
    this.setState({currentUser: null});
  };
  render() {
    const {navigation} = this.props;
    const {currentUser} = this.state;
    //////////////////////////signup
    const goSignup = () => navigation.navigate('Signup');
    const goLogin = () =>
      navigation.navigate('Login', {
        getuser: this.getuser,
      });
    const goStats = () => navigation.navigate('Stats');
    const goGame = () => navigation.navigate('Game');
    const whereGo = currentUser ? goGame : goLogin;
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
                <TouchableOpacity
                  style={styles.touchImage}
                  onPress={() => {
                    console.log('asdasdasdsa');
                    whereGo();
                  }}>
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
                  <TouchableOpacity onPress={() => goSignup()}>
                    <Text id="link" style={styles.link}>
                      click here ..
                    </Text>
                  </TouchableOpacity>
                  <Text style={{marginTop: 20}}>
                    Watch the highest stats for players
                  </Text>
                  <TouchableOpacity onPress={() => goStats()}>
                    <Text id="link" style={styles.link}>
                      click here ..
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </ScrollView>
          <StatusBar barStyle="default" />
        </SafeAreaView>
      </>
    );
  }
}

export default Home;
