import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  button: {
    width: 150,
    height: 33,
    backgroundColor: '#aaa',
    borderColor: 'green',
    borderWidth: 2,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  separator: {
    width: '100%',
    height: 5,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: '#000',
  },
  itemContainer: {
    flexDirection: 'row',
  },
  lsitItem: {
    minWidth: 50,
    minHeight: 50,
    lineHeight: 50,
    borderColor: '#888',
    borderWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  flatList: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
