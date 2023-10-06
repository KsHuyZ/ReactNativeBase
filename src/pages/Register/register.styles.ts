import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  childContainer: {
    marginHorizontal: 20,
    paddingVertical: 5,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  registerTitle: {
    textAlign: 'center',
    fontSize: 30,
    width: '90%',
  },
  inputForm: {
    marginVertical: 10,
  },
  note: {
    color: 'red',
    marginVertical: 5,
  },
  text: {
    marginVertical: 5,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rules: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default styles;
