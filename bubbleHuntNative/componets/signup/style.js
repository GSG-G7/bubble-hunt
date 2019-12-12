import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  done: {
    width: 100,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  View: {
    borderColor: '#ccc',
    width: 300,
    borderWidth: 2,
    borderRadius: 15,
  },
  enterYouEmail: {
    color: '#121212',
    fontSize: 33,
    fontFamily: 'roboto-regular',
    lineHeight: 43,
    textAlign: 'center',
  },
  enterYouName: {
    color: '#121212',
    fontSize: 33,
    fontFamily: 'roboto-regular',
    lineHeight: 33,
    textAlign: 'center',
  },
  enterYouPassword: {
    color: '#121212',
    fontSize: 33,
    fontFamily: 'roboto-regular',
    lineHeight: 33,
    textAlign: 'center',
  },
  scrollArea: {
    backgroundColor: 'rgba(230, 230, 230,1)',
  },
  scrollArea_contentContainerStyle: {
    flexDirection: 'column',
  },
});
