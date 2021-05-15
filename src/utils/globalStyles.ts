import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loader: {
    position: 'absolute',
    backgroundColor: '#00000020',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    zIndex: 5,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 0.5,
    borderRadius: 16,
  },
});
